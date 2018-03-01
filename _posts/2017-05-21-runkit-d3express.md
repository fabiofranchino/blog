---
title: Runkit and D3.express
date: 2017-05-21 14:00:00 +0100
subtitle: 21th May, 2017
style: orange
categories: Review
tags: [review, tools, runkit, prototyping]
---


On April 2017 at [OpenVisConf](https://openvisconf.com) [Mike Bostock](https://bost.ocks.org/mike/) revealed [D3.express](https://d3.express), an online tool to make data exploration easier using D3.js or any other javascript libraries.

D3.express is a notebook in the cloud built upon the following principles:

- Reactivity
- Visibility
- Reusability
- Portability

Since D3.express is still in closed beta, I spent a bit of time trying to figure out whether Runkit can actually behave like D3.express or not.

I'm not sure how D3.express has been implemented but the similarities with Runkit are obvious.

I've started to dig more on Runkit in order to figure out how to create modules in order to ease composition within Runkit.

The first thing I've learned is how to import a Runkit notebook from another notebook:

Runkit provides a proper internal path to refer to any notebook and it follows this pattern:

```javascript
var myElement = require("@runkit/username/notebookname/branches/master")

// alternatively using the published version number
var myElement = require("@runkit/username/notebookname/1.0.0")
```

And this is how is possible to render HTML below a cell

```javascript
module.exports = function(text)
{
    return  "<h1>"+text+"</h1>";
}
```

I can't wait to put my hands on D3.express.