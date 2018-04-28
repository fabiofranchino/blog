---
title: Creating a smart layout with CSS flex
date: 2018-04-28 14:00:00 +0100
subtitle: 28th April, 2018
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, css, flex, layout, smart]
---

Sometimes I use this blog to remind me some technique I learned time ago. I cannot keep everything in my memory, thus, I need to download some stuff somewhere. This blog serves also for that!

This is why I'm going to document this little technique I learned to solve a specific layout need for a personal project both for my personal annotation as well as in the hope it might be useful to someone else.

My problem was: how to keep some content centered vertically in a given wrapper BUT if that content gets bigger the aforementioned wrapper would be so nice to provide a scrollbar?

> This looks a no-brainer problem with CSS flex, isn't it?

The first, and most obvious attempt, **failed**. Using a flex wrapper with `justify-content:center` property was not enough:

<p data-height="265" data-theme-id="light" data-slug-hash="ZoLGaa" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="not smart layout" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/ZoLGaa/">not smart layout</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

For some reason, the content, the moment it needs more space, is placed outside the top side of the wrapper making impossibile to reach the top portion of the content itself.

After a bit of trial and error, I've ended up with a working solution, with an additional flex wrapper:

<p data-height="265" data-theme-id="light" data-slug-hash="xjgGgz" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="smart layout" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/xjgGgz/">smart layout</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

The trick here has been separating the wrapper that is responsible to center the whole content from the one that is responsible to distribute each single items.