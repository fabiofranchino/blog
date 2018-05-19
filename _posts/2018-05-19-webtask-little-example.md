---
title: Little Webtask.io sketch
date: 2018-05-19 14:00:00 +0100
subtitle: 19th May, 2018
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, webtask, vue]
---

[Webtask.io](https://webtask.io/) is a wonderful service that allows deploying little server-side functions in the cloud without worrying (or even thinking) about server setup.

It's one of the many alternatives in the **serverless** movement to allow people to deploy *lambda functions* that can potentially scale at a fraction of cost of traditional solutions.

**Webtask** provides the most interesting and seamless development experience. You can even write functions with their online editor, straight in the browser. In my case, I wrote a little Node.js function and deployed with their CLI.

Every Webtask function can be invoked as regular remote service or API call. GET parameters can be used as well.

Here a little example (powered by Vue.js) that allows the user to add or subtract a counter, saving the result in the cloud. Webtask comes with a 500Kb size limit for simple JSON file persistence.

<p data-height="265" data-theme-id="light" data-slug-hash="pVqxRd" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="Simple WebTask.io example for fun" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/pVqxRd/">Simple WebTask.io example for fun</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

The task is a Node.js function that uses a bunch of Webtask functions to save and retrieve the stored JSON file:

```javascript
module.exports = function (ctx, cb) {
  ctx.storage.get(function (error, data) {
    if (error) return cb(error)

    data = data || {count: 0}

    var val = parseInt(ctx.query.dir)

    if (val && !isNaN(val)) {
      data.count = data.count + val

      ctx.storage.set(data, {force: 1}, function (error) {
        if (error) return cb(error)
        cb(null, {status: 200, data: data})
      })
    } else {
      cb(null, {status: 200, data: data})
    }
  })
}

```

Source [here](https://github.com/fabiofranchino/webtask-little-example).