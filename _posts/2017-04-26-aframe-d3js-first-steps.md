---
title: A-Frame + D3.js first steps
date: 2017-04-26 14:00:00 +0100
subtitle: 26th April, 2017
style: blue
cover: cover.png
---

[A-Frame](https://aframe.io/), the javascript framework for building VR experiences using HTML custom tags, is intriguing, to say the least.  
It's actively supported by [Mozilla](https://www.mozilla.org/en-US/) and it promises to be easy to use and accessible even for non-experienced programmers.  
It's built on top of [Three.js](https://threejs.org/) and other cool web technologies.

VR is actually **a big thing** and it's something I wanted to put my hands on in quite some time. I'm also interested in exploring the potential integration with [D3.js](https://d3js.org/) for data visualization purposes in VR experiences.  

Thus, here my first steps not before a shameless advertisement about an upcoming workshop on data visualization and VR I'm involved in:

<a href="https://goo.gl/0GLSb3">![](../assets/posts/aframe-d3js-first-steps/adv.png)</a>



## The 3D space

Even though the minimal **hello world** example can be considered straightforward, we need to learn some fundamental concepts first in order to not getting lost quite early. Let's consider this chunk of HTML markup:

```html
<a-scene>
	<a-box color="red" width="2" height="2" position="0 2 -5"></a-box>
</a-scene>
```

The above code actually renders a box in the 3d scene.  
The key detail here is the **position** attribute which is responsible for positioning the box in three-dimensional space according to the XYZ axis.

If would happen to leave the default position (which is "0 0 0") you'll end up not seeing anything in the scene. That's because the position of the box coincides with the position of the user's eyes (as if you're within the box).

Now, you might wonder: how to fill that attribute properly?

![](../assets/posts/aframe-d3js-first-steps/right-hand.jpg)

> The position of each object follows the **right-hand** coordinate system.  

Moving the box far from the user's eyes involves the Z axis using negative values, so "0 0 -5". We need also to move the box through the Y axis in order to take it off the ground.  
Here the visible (and draggable) box:

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/aframe-d3js-first-steps/01_first.html" frameborder="0"></iframe>

**Remember:** when you get lost on positioning object in 3D space, use your right hand! It works.

## Interactivity

A-Frame comes with an extra tag to support basic interaction events, the same events we currently use with mouse-driven applications.

Adding the following tags within the main **a-scene** it will add an interactive pointer we can use for selection purposes:

```html
<a-camera>
	<a-cursor></a-cursor>
</a-camera>
```

It's our responsibility defining what should happen when the cursor 'touches' an object, using regular javascript event listeners:

```javascript
var box = document.querySelector('a-box')

box.addEventListener('mouseenter', function () {
    box.setAttribute('scale', {x: 2, y: 2, z: 2})
})

box.addEventListener('mouseleave', function () {
    box.setAttribute('scale', {x: 1, y: 1, z: 1})
})
```

Drag to move the camera view:

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/aframe-d3js-first-steps/02_interact.html" frameborder="0"></iframe>

## Animations

3D objects can be animated using the Aframe animation engine that is controllable through the markup tag **a-animation**.

Each a-animation tag is responsible for animating properties relative to its parent tag:

```html
<a-box width="2" height="2" rotation="0 0 0" position="0 2 -5">
	<a-animation direction="alternate" attribute="rotation" to="0 360 360" dur="4000" repeat="5" easing="linear"></a-animation>
</a-box>
```

Javascript can be used to listen to some useful animation events:

```javascript
var en = document.querySelector('#en')

en.addEventListener('animationstart', function () {
	console.log('animationstart')
})

en.addEventListener('animationend', function () {
	console.log('animationend')
})
```

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/aframe-d3js-first-steps/03_animation.html" frameborder="0"></iframe>



## Welcome D3.js to the party

D3.js loves the HTML markup, therefore the A-Frame markup can be manipulated by it.

Let's try to write a typical D3.js script to bind an array of values to a list of HTML elements, this time using Aframe tags:

```javascript
d3.select('a-scene')
	.selectAll('a-box')
	.data(data)
	.enter()
	.append('a-box')
	.attr('color', 'red')
  	.attr('width', 1)
  	.attr('height', function (d, i) {
  		return d
	})
  	.attr('depth', 0.5)
```

In the following example, you can hover on each box to show (in a rudimentary way) its label. There is also a timid update mechanism with an interval timer:

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/aframe-d3js-first-steps/05.html" frameborder="0"></iframe>

## Adding animation at run-time

I've tried, briefly, adding the a-animation tags at run-time without luck. At first instance, it looks they need to wait for some initialisation callback in order to append animation tags in the scene properly. I'll investigate on it, promise.

In the meantime, I found out an alternative contributed (A-Frame have a lot of contributed add-ons) library, [iframe-animation-component](https://github.com/ngokevin/kframe/tree/master/components/animation/), that overcome this limitation.

<iframe class="fuildframe" width="3000" data-width-mobile="1000" height="1000" src="https://fabiofranchino.com/aframe-d3js-first-steps/06.html" frameborder="0"></iframe>

## What's next?

I have to admit. Even only think about designing data visualizations in VR space is quite a silly exercise.  

> It's a new interaction paradigm and **a lot** of experiments need to be conducted.

Do you want to be part of this revolution?  
This summer there'll be an exciting workshop on the topic.  
[Join](https://goo.gl/0GLSb3) us to this awesome learning experience in beautiful Lugano:

<a href="https://goo.gl/0GLSb3">![](../assets/posts/aframe-d3js-first-steps/adv.png)</a>

Full source code [here](https://github.com/fabiofranchino/aframe-d3js-first-steps)
