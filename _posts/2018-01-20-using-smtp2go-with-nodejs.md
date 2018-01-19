---
title: Using Smtp2Go with Node.js
date: 2018-01-20 14:00:00 +0100
subtitle: 20th January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, nodejs, smtp2go, email]
---

Sometimes you need a way to send email based on some automatisms or you need to send a bulk of emails without relying on external SaaS for some reasons.

[SMTP2Go](https://www.smtp2go.com/) is a neat service to send email programmatically by calling regular RESTfull API over the network. The service is kind enough to provide a free plan for those who don't have to send a massive amount of emails.

Using Node.js together with it is quite trivial. A simple module, let's say `sender.js` might be filled with this code:

```javascript
const request = require('request')

var smtpurl = 'https://api.smtp2go.com/v3/email/send'

var smtpob = (name, email) => {
  return {
    'api_key': 'your-api-key',
    'to': [`${name} <${email}>`],
    'sender': 'My Company <hello@example.com>',
    'subject': 'A Subject',
    'text_body': 'some text'
  }
}

module.exports = function () {
  function send (name, email) {
    var src = smtpob(name, email)

    request
          .post({
            headers: {'content-type': 'application/json'},
            url: smtpurl,
            body: JSON.stringify(src)
          })
          .on('response', function (response) {
            if (response.statusCode !== 200) {
              console.log(response.statusCode)
              console.log(response.statusMessage)
            }
          })
          .on('data', function (data) {
            console.log('decoded chunk: ' + data)
          })
          .on('error', function (err) {
            console.log('Email sender', err)
          })
  }

  return {send: send}
}
```

Now, in order to use with your content, go to create an `index.js` file with:

```javascript
var sender = require('./sender.js')()

sender.send('Fabio', 'hello@fabiofranchino.com')
```

By running this script I'll receive a message from it (please, change the email before using it!).

If you want to use this service in the right way, don't forget to configure properly [the SPF record](https://support.smtp2go.com/hc/en-gb/articles/223087247-Setting-up-an-SPF-Record) in your DNS to avoid to be caught by spam filters.