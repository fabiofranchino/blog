---
title: D3.js dispatch custom event with parameter
date: 2017-09-12 14:00:00 +0100
subtitle: 12th September, 2017
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, d3js, custom, event, dispatch, tip]
---

This post just to remember me how something apparently easy might turn out so damn time consumer.

> My goal: dispatch a custom event from a selection passing a custom parameter.

Let's assume you have a selection:

```javascript
var circles = d3.selectAll('circle')
```

And you want to listen for a *custom event*:

```javascript
circles.on('myevt', function(d, i){
  console.log('myevt')
})
```

Now you want to dispatch that *custom event*, therefore, all the elements listening for it will be notified:

```javascript
d3.selectAll('circle').dispatch('myevt')
```

The *console.log* will print `myevt` as expected.

Now the quest: how to pass a custom parameter?

First, you have to learn how to catch the event parameter:

```javascript
circles.on('myevt', function(d, i){
  var evt = d3.event
})
```

This will get you the *event* object with its standards properties.

Then, you need to learn how to properly set the parameter in the dispatch function:

```javascript
d3.selectAll('circle').dispatch('myevt', {detail: {myCustomObject:'bla bla bla'} })
```

Please note that `detail` is not there by chance.  
It's the **required field** that can be populated with your custom object, therefore you can access to it with:

```javascript
circles.on('myevt', function(d, i){
  var myParams = d3.event.detail
})
```

Fiuu… another little `detail` learned today.

Here the [working snippet](https://codepen.io/abusedmedia/pen/zEYBmv) if you're interested.