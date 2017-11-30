---
title: Chart template with more goodies
date: 2017-11-30 14:00:00 +0100
subtitle: 30th November, 2017
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, d3js, template, reusable, proof, chart]
---

Following [my](https://fabiofranchino.com/blog/going-towards-reusable-d3js-charts/) [initial](https://fabiofranchino.com/blog/towards-a-better-chart-template/) [exploration](https://fabiofranchino.com/blog/size-matters/) of trying to figure out a better way to implement reusable d3.js scripts, here a further step on the topic.

The last iteration still continues to convince me, therefore, I've added more configuration possibilities.

## Margin and Padding

The padding was not enough, therefore, I've added another object to set the margins as well. It follows the same paradigm of the box model of the HTML elements in the browser.

This default objects (alongside with relative public methods to configure them) allow the correct placement of all the elements considering also the axis space requirements.

```js
var padding = {top: 5, bottom: 5, left: 5, right: 5}
var margin = {top: 10, bottom: 30, left: 40, right: 10}
```

## Custom accessor

Based on the idea to follow the d3.js paradigm as much as possible, I've added the possibility to change some accessors in the same way d3.js does with its objects. This means that I can write something like:

```js
var colorScale = d3.scaleOrdinal(d3.schemeCategory10)

var vis = myViz()
  .colors(colorScale)
  .y(d => d.val)
```

as well as this:

```js
var vis = myViz()
  .colors('red')
  .y('country')
```

to give the developer great flexibility without compromising the usability with too many configuration options.

The magic happens thanks to this piece of code:

```js
function getAccessor (d, a) {
  if (typeof a === 'string') {
    return d[a]
  } else if (typeof a === 'function') {
    return a(d)
  } else {
    return a
  }
}

function getY (d) {
  return getAccessor(d, y)
}

// example of usage:
d3.line()
	.x((d, i) => i)
	.y(d => getY(d))
```

## Where it's going?

It's a long journey with a lot of thoughts and second thoughts. I like to continue to stick with the d3.js paradigms that allow great flexibility. We'll see next.

Source code [here](https://github.com/fabiofranchino/chart-template-more-goodies).