---
title: Bending-Dancing
date: 2017-08-09 14:00:00 +0100
subtitle: 9th August, 2017
style: purple
cover: cover.gif
categories: Projects
tags: [project, svg, d3js, animation, lines, bend, smooth]
---

A few years ago, a little trick opened up a new trend on animations on the web. I'm talking about the Animated Line Drawing technique in SVG path discovered and documented back in 2013  by Jake Archibald [here](https://jakearchibald.com/2013/animated-line-drawing-svg/).  
CSS-Tricks wrote about it extensively [here](https://css-tricks.com/svg-line-animation-works/).

Briefly, it relies on changing two props belonging to the SVG path, `stroke-dasharray` and `stroke-dashoffset`.  
They can be set with values between `0` and the path length using the native function `getTotalLength()`.

![cover](../assets/posts/bending-dancing/cover.gif)

D3.js transition can animate those attributes out of the box, therefore, I can't help but playing a bit with them is just a matter of these line of code:

```javascript
path.transition()
	.attr('stroke-dasharray', function () {
		var length = this.getTotalLength()
		return Math.random() * length
	})
  	.attr('stroke-dashoffset', function () {
		var length = this.getTotalLength()
		return Math.random() * length
	})
```

I got curious about exploiting the technique to build animated structures using different shapes and pattern.

Here with horizontal lines (click to change):

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/bending-dancing/02.html" frameborder="0" scrolling="no"></iframe>

Here with the border of a rect (click to change):

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/bending-dancing/03.html" frameborder="0" scrolling="no"></iframe>

The border of circles (click to change):

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/bending-dancing/04.html" frameborder="0" scrolling="no"></iframe>

Tha same as above with different stroke width (click to change):

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/bending-dancing/05.html" frameborder="0" scrolling="no"></iframe>

Now you can [experience the final exploration](http://fabiofranchino.com/bending-dancing/).

If you are interested, you can find the source code [here](https://github.com/fabiofranchino/bending-dancing).