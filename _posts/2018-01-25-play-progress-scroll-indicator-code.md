---
title: Play with  a custom progress scroll indicator code
date: 2018-01-25 144:00:00 +0100
subtitle: 25th January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, jquery, progress, custom, tip]
---

If you want to implement a progress scroll indicator, you have two options: 

- search for tutorials or drop-in libraries
- do the hard work to learn something new

The latter is what I did that turned out simpler (from the amount of code perspective) than I thought at first instance. It has been also the opportunity to play with this specific behavior outside the initial goal.

First off, the code. A progress bar element might be a simple `div` that needs to be styled with CSS. With the following HTML and CSS we have now an element ready to be managed by javascript:

```html
<div id="indicator"></div>
```

```css
#indicator{
  position: fixed;
  top:0;
  left:0;
  height: 3px;
  background-color: red;
  z-index: 999;
}
```

If you add this CSS rule you'll have a much more smooth animation. I do prefer the more straight width calculation, though.

```css
transition: width .25s ease-in-out;
```

The next requirement is the logic part (i'm shameless using jQuery to write less code here):

```javascript
$(window).on('scroll', function () {
  var scrollPos = $(window).scrollTop()
  var winHeight = $(window).height()
  var docHeight = $(document).height()
  var perc = 100 * scrollPos / (docHeight - winHeight)
  $('#indicator').width(perc + '%')
})
```

That's it. With these code you'll have a neat progress scroll indicator on your page:

<p data-height="300" data-theme-id="light" data-slug-hash="NXZdgq" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="NXZdgq" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/NXZdgq/">NXZdgq</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

You might notice that using percentage value means basically that the progress bar is fluid by design no matter the window width even if the user resizes the window at runtime. 

As you might notice, the `js` function compute a `perc` value that can be used for anything in your page, let's say, the background color:

<p data-height="300" data-theme-id="light" data-slug-hash="ppXRpN" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="ppXRpN" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/ppXRpN/">ppXRpN</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

Or using the powerful animation library [TweenMax](https://greensock.com) to control more complex animations using the TimelineMax component with this code:

```javascript
var tl = new TimelineMax().pause()
tl.to('#a', 4, {y:100})
tl.to('#b', 4, {y:200})
...

$(window).on('scroll', function () {
  var scrollPos = $(window).scrollTop()
  var winHeight = $(window).height()
  var docHeight = $(document).height()
  var perc = scrollPos / (docHeight - winHeight)
  tl.progress(perc)
})
```

Where the Timeline progression will be handled by the `perc` value.

<p data-height="400" data-theme-id="light" data-slug-hash="LeKxMX" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="LeKxMX" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/LeKxMX/">LeKxMX</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

As you can see, endless possibilities.