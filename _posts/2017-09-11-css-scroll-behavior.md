---
title: CSS Scroll Behavior
date: 2017-09-11 14:00:00 +0100
subtitle: 11th September, 2017
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, css, scroll, behavior, tip]
---

Last day I've been notified by Google Chrome about its version update (61.x). I've quickly checked the release notes discovering the introduction of the CSS property `scroll-behavior`, a property I didn't know about.

I've got interested and I've conducted a quick search about it.

It's a [neat property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) that allows to smoothly animate the scroll position in a scollable box, instead of a straight jump, when using anchor links to target different position of the viewport.

Adding transitions to state changes is not a cosmetic feature. The ability to let the user know what's going on in front of her after an action is **key** in usability realm.

The web is full of this kind of effect thanks to javascript that allows to add any kind of behavior to our interfaces. For that reason, the CSS `scroll-behavior` property is not going to impress anyone.

What is amazing here (that is typically of the CSS in general) is the *simplicity* as well as the *backward compatibility* about adding this behavior.  
We don't have to reinvent the wheel with some library to incorporate a smooth scrolling behavior in our scollable panel, not anymore. And we don't have to worry about backward compatibility. If a browser doesn't support it, it will be ignored, making the page working without transition.

So far, it's compatible with the latest version of Chrome (61.x) and Firefox (55.x). Here a quick sketch that works on every browsers, with or without animation based on browser compatility.

Feel free to click on the header sections, the next/prev and don't forget to try the last section as well:

<p data-height="365" data-theme-id="light" data-slug-hash="qPWdwO" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="CSS Scroll Behavior" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/qPWdwO/">CSS Scroll Behavior</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

**Tip:** if you set the scrollable wrapper both with `overflow:hidden;` and `scroll-behavior: smooth;` you get and interesting effect. The user scroll is disabled (and so the scrollbar are hidden) but the behavior is still working as expected using the anchor links, even in browsers that don't support `scroll-behavior` property.