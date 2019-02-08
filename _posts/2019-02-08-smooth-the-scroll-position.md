---
title: Smooth the scroll position with JS
date: 2019-02-08 14:00:00 +0100
subtitle: 8th February, 2019
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, ux, scroll, css]
---

I've [already written](/blog/css-scroll-behavior/) about the CSS gem `scroll-behavior`, a property that allows animating the scroll position change of any HTML element with scroll capability.

In the previous tutorial, I've shown how it can be used together with anchor links, without relying on javascript at all.

This time I needed to achieve a particular micro-interaction in my side-project toy,  [Presenta](https://www.presenta.cc), as briefly shown here:

<video autoplay muted loop src="../assets/posts/smooth-the-scroll-position/sidebar.m4v"></video>

The sidebar allows to select a specific item (the thumb) and the scroll position needs to be changed in order to keep a precise horizontal alignment between the thumb and the editor panel.

An immediate change would not be very user-friendly or even worse it would be highly annoying.

## Scroll-Behavior to the rescue

Here the amazingness of CSS. With just one line of it, any scroll position changes will be nicely animated.

It's jus a matter of modifing the `scrollTop` property of the HTML element to make the magic, such as:

```javascript
document.querySelector('.mydiv').scrollTop = 100
```

If you have Chrome or Firefox you should see the animation here:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="abusedmedia" data-slug-hash="vbdBPQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Scroll-position-basic">
  <span>See the Pen <a href="https://codepen.io/abusedmedia/pen/vbdBPQ/">
  Scroll-position-basic</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Here a little Vue.js app (you know that [I'm a fan](https://fabiofranchino.com/blog/tag/vue) of Vue.js?) that shows the meat (click the red thumbs **1**):

<p class="codepen" data-height="365" data-theme-id="0" data-default-tab="result" data-user="abusedmedia" data-slug-hash="KJZPMp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="smooth scrolling to position">
  <span>See the Pen <a href="https://codepen.io/abusedmedia/pen/KJZPMp/">
  smooth scrolling to position</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Have a nice day!