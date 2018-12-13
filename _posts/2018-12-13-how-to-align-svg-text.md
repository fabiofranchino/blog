---
title: How to align SVG text with CSS
date: 2018-12-13 10:00:00 +0100
subtitle: 13th December, 2018
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, svg, css, text, align]
---

This is more a reminder to myself to recall how to align properly (both horizontally and vertically) `text` elements in `SVG` space through a couple of CSS properties.

Creating a `text` tag in SVG usually doesn't produce the expected result:

<p data-height="265" data-theme-id="0" data-slug-hash="KbdjWv" data-default-tab="html,result" data-user="abusedmedia" data-pen-title="txtsvg01" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/KbdjWv/">txtsvg01</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

You don't see anything, uh?

This is because the default vertical alignment is not centered causing the text to be outside the visible canvas.

There are two specific CSS properties, not very intuitive though, that allow to align properly, both horizontally and vertically, a text element in an SVG canvas.

```css
text{
  text-anchor: middle; /* align center */
  dominant-baseline: middle; /* vertical alignment fix */
}
```

<p data-height="265" data-theme-id="0" data-slug-hash="oJjrZO" data-default-tab="result" data-user="abusedmedia" data-pen-title="txtsvg02" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/oJjrZO/">txtsvg02</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Hope this little note helps.