---
title: Borrowing a barchart
date: 2018-01-15 14:00:00 +0100
subtitle: 15th January, 2018
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, rivela, d3js, template, reusable, proof, chart]
---

I really enjoyed reading the [last article](https://blog.datawrapper.de/weekly-chart-income/) from [Datawrapper](https://www.datawrapper.de/). I strongly suggest you to follow their blog.

The only missed thing, after finished reading it and checked back the chart, was that I really wanted to play with it to answer some curiosities that came into my mind. That's the benefit of interactive charts, isn't it?

I took this as an opportunity to play more with my D3.js [in-progress-chart-lib journey](/blog/can-we-live-without-pies/), thus, I borrowed their chart. 

This is an interesting way to improve a project that is supposed to be abstract as much as possible. Trying to replicate, and hopefully improve, a given chart means basically deal with the needs of a potential user, a great way to let arise the limitations of some design choices. 

## Show the data

I've started to visualize the dataset kindly provided by the article:

<p data-height="400" data-theme-id="light" data-slug-hash="GyBjXr" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="GyBjXr" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/GyBjXr/">GyBjXr</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

This shows immediately a requirement the library cannot handle so far: the label format of a given axis. Instead of adding a configuration for the label format I've implemented the possibility to set a d3-axis object. This way, the limitation described above can be overcome with this setting:

```javascript
var myCustomAxis = d3.axisBottom().tickFormat(d3.format('.0s'))

var chartGen = rivela.barchart()
    .axisx(myCustomAxis)
```

## Sorting the dataset

The next step was to let the user sort the charts using different keys:

<p data-height="400" data-theme-id="light" data-slug-hash="aEjQXG" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="aEjQXG" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/aEjQXG/">aEjQXG</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

To better try to spot interesting fact out of this chart we need a tool to play with the data points. The next iteration implements a rollover effect to select the same Country on both charts:

<p data-height="400" data-theme-id="light" data-slug-hash="NXBEmN" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="NXBEmN" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/NXBEmN/">NXBEmN</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## The initial goal

The first purpose of this exploration has always been to create an interactive version of the Datawrapper chart primarly to test my library, so here it is:

<p data-height="400" data-theme-id="light" data-slug-hash="WdKYBx" data-default-tab="result" data-user="abusedmedia" data-embed-version="2" data-pen-title="WdKYBx" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/WdKYBx/">WdKYBx</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

The trick here has been to use two barcharts stacked on each other using the same svg, setting a special CSS class to make invisible some duplicated elements such as axis, title and background. This is not the most efficient and elegant solution from the implementation point of view, but I like to achieve the desired result without polluting the library with further unnecesary options.

This exercise allowed me also to fix a couple of other constraints to let more freedom for the experienced user.





<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>