---
title: CSS Object-Fit is awesome
date: 2019-10-23 13:00:00 +0100
subtitle: 23th October, 2019
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, css,  center, layout]
---

The CSS `object-fit` property is simply great.

Here an example on what you can do with it together with `flex`, centering and scaling an image in a container maintaining the image proportion:

<iframe height="265" style="width: 100%;" scrolling="no" title="object fit" src="https://codepen.io/abusedmedia/embed/qBBroYO?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/abusedmedia/pen/qBBroYO'>object fit</a> by Fabio Franchino
  (<a href='https://codepen.io/abusedmedia'>@abusedmedia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Here the relevant parts:

Set the container as `flex` and center its content:

```css
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}
```

and here the part for the image in order to scale it proportionally:

```css
.wrapper img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

Simple as that!

Here the [Codepen](https://codepen.io/abusedmedia/pen/qBBroYO?editors=1100).