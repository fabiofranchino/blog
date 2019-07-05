---
title: Vertical Text with CSS
date: 2019-07-05 5:00:00 +0100
subtitle: 5th June, 2019
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, css, text, vertical]
---

If you need to put a text vertical (meaning rotated) the usual solutions are basically two:

- using [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) CSS property
- rotate the text with [transform](https://davidwalsh.name/css-vertical-text)

Both solutions work well but the direction of the text is always the same, the text starts from top to bottom.

If you want to have more control defining more precisely the direction and other position contraints, here a quick solution using an outer wrapper and an inner text container.

The markup is something like:

```html
<div class="outer">
  <div class="inner">A vertical text</div>
</div>
```

and here the minimal CSS:

```css
.outer{
  writing-mode: tb-rl;
  display:flex;
  align-items:center;
  justify-content: flex-end;
}
.inner{
  transform: rotate(180deg);
  transition: transform 1s ease-in-out;
}
```

It's based on the combination of `flex` properties in the outer wrapper and the `transform` property in the inner one.

You can check a working example [here](https://codepen.io/abusedmedia/pen/PrBROq?editors=1100) and if you want to explore the different possibilities, here a little toy to pay with:

<p class="codepen" data-height="404" data-theme-id="0" data-default-tab="result" data-user="abusedmedia" data-slug-hash="orMreJ" style="height: 404px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rotated vertical text interactive">
  <span>See the Pen <a href="https://codepen.io/abusedmedia/pen/orMreJ/">
  rotated vertical text interactive</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>