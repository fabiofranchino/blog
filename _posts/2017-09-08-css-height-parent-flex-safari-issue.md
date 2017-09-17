---
title: Safari is the new IE
date: 2017-09-08 14:00:00 +0100
subtitle: 8th September, 2017
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, css, scroll, safari, issue, tip]
---

Working with CSS these days is way better than few years ago thanks to the new *specs* as well as the commitment towards W3C standards from browser vendors.

Unfortunately, it's not perfect. Indeed, we're far from living in a perfect world.

I can feel a pattern everytime I work with CSS and layout: **Safari** is the last step, the "give me a break, eventually, I'll fix Safari issues".

Here an example of what I'm talking about. A simple layout with a scrollable container and a bunch of children that expand their height 100% the container size.

On **Chrome** and **Firefox** this works like a charm, but not on Safari (because it fails to calculate the height of the children elements according to the container size):

<p data-height="265" data-theme-id="0" data-slug-hash="gxNzYV" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="Child height in flex parent" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/gxNzYV/">Child height in flex parent</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Since it will be fixed at some point, here a screenshot taken with Safari 10.1.2 desktop version:

![](../assets/posts/css-height-parent-flex-safari-issue/safari.png)

And here a modified version to make it Safari compatible. You can see I had to add an additional wrapper and change the CSS making it less maintainable:

<p data-height="265" data-theme-id="0" data-slug-hash="dzBePw" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="Child height in flex parent Safari compatible" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/dzBePw/">Child height in flex parent Safari compatible</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As it happened in the old days, testing against the less compliant browser is key to avoid big headaches during CSS development. You've been warned.

**Update:** ~~actually, using *100vh* instead *100%* as height value makes it to work as expected. Good to know, however, this doesn't change my feeling on Safari.~~ Actually, *100vh* is not a solution since Safari on iOS ignores its bottom-bar to calculate the height resulting in a wrong value.

**Update 2:** apparently, the upcoming Safari 11 fixed the mentioned issue.