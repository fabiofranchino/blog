---
title: Runkit is great
date: 2017-04-13 14:00:00 +0100
subtitle: 13th April, 2017
style: blue
cover: cover.jpg
categories: Tutorials
tags: [runkit, tips]
---

![](../assets/posts/runkit-is-great/cover.jpg)

Some friends and followers already know I'm a keen advocate of scraping online information especially when that information are not easily available in a machine readable format.   

To me, the default openness of the information, which is at the heart of the web, is the most important feature that allowed the internet to grow in an organic and unpredictable way.

Scraping information can be achieved with a lot of technologies across different difficult levels.  
I've already shown one of these ways in this [article](/blog/scraping-data-in-the-kitchen) where the DevTool of the browser was the main tool.

## Runkit

This time I'm going to explore a tool I'd have liked to use time ago when it was named Tonicdev.
I'm talking about [Runkit](https://runkit.com/home), a node-based online notebook useful to test new ideas without setting up any server component.  

The novelty of Runkit comes from the Node.js ecosystem and this is one of the reasons why Node.js is awesome.

One of the possibilities of Runkit is that it allows exposing any javascript functions as [public API endpoints](https://runkit.com/docs/endpoint) writing something like:

```javascript
exports.endpoint = function(request, response) {
    response.end("Hello world!");
}
```

Therefore, this [url](https://runkit.io/abusedmedia/58edc00b4831570013a673fa/branches/master) will respond accordingly. Can you see the awesomeness?

In this experiment, I have to mention also a great library to manipulate the DOM. [Cheerio.js](https://github.com/cheeriojs/cheerio), a fast, flexible, and lean implementation of core jQuery designed specifically for the server. A very good alternative to [jsdom](https://github.com/tmpvar/jsdom).

## My Twitter feed

Here my first experiment.

I've exposed [my Twitter feed](https://runkit.com/abusedmedia/mytweetfeed) scraped from the public website as a readable JSON response without dealing with the Twitter API (policy, limits, auth) at all. 

You can see the live result by fetching [this url](https://runkit.io/abusedmedia/mytweetfeed/branches/master).

## Runkit is great

Runkit notebooks are public by default. You can fork other notebooks with ease.  
I suspect they'll build their business model at some point like NPM and similar services did in the past, giving paid private features, which is fine with me.

Runkit is great not only for personal experiments but also in educational context as well.  
Indeed, it's an interesting tool for documentation and demonstration purposes.

I'll continue to poke around it maybe developing some [d3.js](https://d3js.org) modules for it, which is quite accessible as you can see by this [example](https://runkit.com/npm/d3).