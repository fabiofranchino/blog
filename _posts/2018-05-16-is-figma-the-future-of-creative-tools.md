---
title: Is Figma the future of creative tools?
date: 2018-05-16 14:00:00 +0100
subtitle: 16th May, 2018
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, figma, webtask, process]
---

I've started to be excited about Figma since the [Web API](https://www.figma.com/developers) announcement.

Their vision is actually the most interesting and reasonable idea of the future of creative tools.

It is both simple and powerful: every Figma document (and every single element) can be accessed through API.

That means: new tools and practices will arise to foster better process and outcomes as well. New paradigms of interactions between creatives and technologists will be invented. Exciting time to work in creative industries.

By teaching in design schools, I've always struggled to provide a solid process to both let them draw on a comfortable tool such as Adobe Illustrator and apply coding strategies to enhance their creations using Javascript.

The SVG format is nice and suitable for this kind of interaction. Adobe Illustrator, on the other side, is not so good at exporting SVG files (despite being the best compared with the alternatives).

Figma can become that **solid process**. The students can either draw on Figma and switch on, let's say Codepen, to interact with it in seconds.

Here a quick proof-of-concept. The following Codepen loads a Figma document as SVG and inject it to the body, so I can be manipulated with Javascript:

<p data-height="265" data-theme-id="light" data-slug-hash="pVvVBz" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="FirstTestWithFigma4APIWithWebTask" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/pVvVBz/">FirstTestWithFigma4APIWithWebTask</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As you can see, the url is not a Figma endpoint but a [WebTask](https://webtask.io/) service, thus, the X-Figma-Token can be hidden, also simplifying the script in Codepen for newbies.

Here the source of the task for future reference:

```javascript
const req = require('request')

module.exports = function (context, cb) {
  const key = context.query.key

  var options = {
    url: `https://api.figma.com/v1/images/${key}?ids=0:1&format=svg`,
    headers: {
      'X-Figma-Token': 'put-your-api-key-here'
    }
  }

  req(options, (error, response, body) => {
    var data = JSON.parse(body)
    var url = data.images['0:1'] // get the static url to download the SVG file
    req(url, (error, response, body) => {
      cb(null, body)
    })
  })
}
```

It'll be the future? I don't know but I'd bet on it.



