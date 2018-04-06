---
title: How to load an external image in SVG with D3.js
date: 2018-03-26 14:00:00 +0100
subtitle: 26th March, 2018
style: blue
categories: Tutorials
tags: [tutorial, d3js, svg, image, load]
---

In order to load an image into a `svg` tag we usually need a reference of the svg first (assuming there's a single `svg` tag in the `html` document), with this code:

```javascript
var svg = d3.select('svg')
```

Then, here the script to load an image both from a local or remote path. Basically we need to append an empty `image` tag within the `svg` and decorate its attribute in order to provide the image location as well as the image dimensions:

```javascript
var myimage = svg.append('image')
    .attr('xlink:href', 'http://lorempixel.com/200/200/')
    .attr('width', 200)
    .attr('height', 200)
```

Unfortunately, in the `svg` realm, we don't have the magic of the box-model of the browser that is able to guess the image dimensions and the proper aspect-ratio for free.

In `svg` we need to explicitly set both the `width` and the `height` of the image we want to show.

Of course, we can position the image in the canvas space by using regular `x` and `y` attributes, such as:

 ```javascript
myimage.attr('x', 50)
 ```

or even using the `transform` attribute to `translate`, `scale` and `rotate` our picture such as:

```js
myimage.attr('transform', 'rotate(90)')
```

Here a live [Codepen](https://codepen.io/abusedmedia/pen/oqaMaz) of this example.