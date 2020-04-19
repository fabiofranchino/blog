---
title: Mailchimp bridge for JAMStack website
date: 2020-04-20 07:00:00 +0100
subtitle: 20th April, 2020
style: blue
cover: cover.jpg
categories: Tutorials
tags: [tutorial, webtask, lambda, mailchimp]
---

If you run a [JAMStack](https://jamstack.org/) website and want to include a subscribe form to collect emails, there's tons of options out there.

But if you, like me, want to have full control over the user experience, maybe you want to implement yourself the subscribe form and just call the service to store the email.

There are many services for email subscription. If your service of choice has API endpoints, then, follow this little tutorial about how to set up a little serverless lambda function that acts as a bridge between your static website and the external service (such as Mailchimp) in a secure way.

## Security

You know, everything that sits in a frontend code is completely open and visible to anyone. 

That means that drowning credentials in frontend code is not ideal, to say the least.

Usually, deadling with API services does require some credentials, so, here the strategy:

- The frontend makes an ajax call to a little middle-service, a so called lambda function.
- The lambda function receives the request and, using some hidden credentials as well as performing some sanity check, can then make a request to the external service.
- Whatever the service response is, the frontend will receive a digested version from the middle-service.

## Webtask

There are many services that allow you creating lambda functions. [Webtask](https://webtask.io/) is a neat  and easy to use serverless service. It allows to publish a Node.js file transforming a pure js function in an API call.

A base-bone Webtask function looks like this:

```js
module.exports = function (context, cb) {
  // the query parameters
  var param = context.query.myparam
  
  // performe something
  
  // call the callback when finished, passing an optional error object as a first parameter
  cb(null, { message: 'done!' })
 }
```

Extending the above example it's a matter of adding a network request to a service to do the job.

## MailChimp

MailChimp has an API option to work with it in headless mode. Here a sample about subscribing an email using axios:

```js
axios({
  method: 'post',
  url: mailchimpUrl,
  data: {email:'some@email.com'}
})
```

The `mailchimpUrl` needs to be constructed this way:

```js
let mailchimpUrl = `https://user:${MAILCHIMP_PASS}@${MAILCHIMP_URL}`
```

where `MAILCHIMP_PASS` is the token you can get from your Mailchimp account and `MAILCHIMP_URL` is the API endpoint with the list ID, such as:

```js
const MAILCHIMP_URL = 'us17.api.mailchimp.com/3.0/lists/<YOUR-LIST-ID>/members'
```

## The frontend

The frontend part can be anything you like plus an ajax request, such as:

```js
document.querySelector('button').addEventListener('click', e => {
  
  axios.get(serviceUrl)
    .then(response => {
    console.log(response)
  }).catch(err => {
    console.log(err)
  })

})
```

The `serviceUrl` is the public Webtask URL with the query parameters appended to the URL (that URL will be provided by Webtask once you'll publish a task with their CLI), because Webtask service responds to GET requests only: `https://webtask.io/url?myparam=myval`

So, you get the picture, so, the full source code [here](https://github.com/fabiofranchino/mailchimp-bridge-for-jamstack).