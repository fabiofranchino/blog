---
title: Avoid navigate with href with D3.js
date: 2018-01-22 15:00:00 +0100
subtitle: 22nd January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, d3js, href, jquery, tip]
---

This might be a dumb post but I like the idea to log even tiny bits of what I learn in my daily routine.

Today a spent a bit of time figuring out how to disable an href HTML link when the same should be controlled by D3.js.

I have a considerable experience with D3.js, nevertheless, sometimes I got stuck on a very basic situation like this one.

I usually handle this stuff with jQuery with the following, well-known, snippet:

```javascript
$('.mylink').on('click', function(){
  // my code here
  return false
})
```

The `return false` is the key to stop the default behavior of the browser. The same doesn't work when using D3.

Indeed, D3.js doesn't bind the callback function with the event itself. The `this` keyword doesn't represent the event object. You need to use a specific D3 object (`d3.event`) to catch it, then, you're able to modify the native event methods, i.e. the `preventDefault` method to stop the default browser behavior, such as:

```javascript
d3.select('.mylink').on('click', function(){
  // my code here
  var event = d3.event
  event.preventDefault()
})
```

Hope this might save bits of time to some random readers.