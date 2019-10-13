---
title: Download a resource as file in browser with this library
date: 2019-10-12 13:00:00 +0100
subtitle: 12th October, 2019
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, library, js, file]
---

If you need to allow your users downloading a resource from your website, here a [tiny library](https://github.com/abusedmedia/dl-rsc-as-file) I've built for you.

## What is a resource?

A resource can be something contained in a web page such as an Image, Video, SVG, Canvas element or a Text.

## What it does?

Suppose you have an SVG or a Canvas element or even a text that you want your users download as a single file. Well, this library allows this feature with a convenient function call, such this:

```js
downloadAs.svg('#mySvg', 'svgFile.svg')
```

Just pass the SVG selector and the file name to force the browser the download action.

Or you can use these API variations based on what you need:

```js
downloadAs.cnv('#myCanvas', 'svgFile.png')
```

```js
downloadAs.txt('Some paragraph', 'svgFile.txt')
```

```js
downloadAs.svgcnv('#mySvg', 'svgFile.png')
```

## How I've built it?

Following my [proof-of-concept](/blog/develop-a-js-lib-these-days/) about building a javascript library these days, I've learned how to properly package a library to have a cross-compatible piece of code as well as a nice development experience at the same time.

The funny thing is that I've used the Rollup/Babel setup in the very first version then I've switched to Webpack setup. 

Webpack streamlined a lot the setup process, thus, my choice of the porting.

## Why I've built it?

There are some other similar libs around (of course) but I wanted something more complete because I'm planning to release a bunch of little tools that will use such functionality.

## Limitations

So far, images and videos are not supported because it's meant to support primarly generated elements such as SVG, Canvas elements and Text source. Said that, it's something that can be added quite easily in the future.

Go to [its repository](https://github.com/abusedmedia/dl-rsc-as-file) to learn more about the library or check this live example on [Codepen](https://codepen.io/abusedmedia/pen/VwweXBJ).



