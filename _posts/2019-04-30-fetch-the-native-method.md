---
title: Fetch, the native method to do ajax
date: 2019-04-30 10:00:00 +0100
subtitle: 30th April, 2019
style: blue
categories: Tutorials
tags: [tutorial, js, fetch, ajax]
---

Everybody knows that one of the most important benefits of jQuery has always been the `$.get()` or the `$.ajax()` function to perform the so-called ajax request in the browser. At that time doing the same in vanilla js (using the `XMLHttpRequest` object) was way more verbose and error-prone.

Nowadays, the modern javascript provides us a much modern method to perform http requests.

Fetch, the modern native function looks pretty much the predecessor of **jQuery** or other libraries such as **d3** and **axios**. 

Its usage is pretty straightforward, well documented on the [MDN website.](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

Unlike the libraries that have similar fetch concepts, the native `fetch` returns a Promise of the request first, then a second Promise will contain the response of the server.

So, a request made with jQuery, like:

```javascript
$.get('https://www.example.com')
	.then(data => console.log(data))
```

should be rewritten using `fetch` like:

```javascript
fetch('https://www.example.com')
	.then(response => response.json())
	.then(data => console.log(data))
```

The `.json()` function actually convert the raw data into a native javascript object, that object will be returned by the second Promise.

To catch an error, use the `.catch` function as usual in this type of context:

```javascript
fetch('https://www.example.com')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.log(err))
```

## Fetch options

For instance, to perform a POST request with `fetch`, here the way:

```javascript
fetch(`/save`, {
      method: 'POST',
      body: JSON.stringify({ }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
```

You have to add on optional configuration object where you can specify the method and other options as well.

At first sight the double Promises to get the data we want looks a bit over-complicated and unnecessary.

In reality, using the async/await keywords, the possibility to separate the response status and the actual server response is essential to catch all the edge cases. 

Stay tuned for the next tip about them.
