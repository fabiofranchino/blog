---
title: Might become a lib
date: 2018-01-07 14:00:00 +0100
subtitle: 7th January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, rivela, d3js, template, reusable, proof, chart]
---

I've thought [a bit](/blog/chart-template-more-goodies/) on reusable D3.js chart template lately.  
It's an interesting journey that led me to further thoughts with the chance to create even a long-term project.

It's still a working progress and far from having a roadmap. I really want to follow a bottom-up process.

This is the first module, a barchart generator.

## The initialization

Most D3.js based libraries use a specific API to handle the data binding with a selector.  
To me, the way D3.js handles that function sounds totally right. 

This barchart generator needs to be configured first, in the same way [d3-axis](https://github.com/d3/d3-axis) or other similar modules require: 

```javascript
var chart = rivela.barchart()
	.width(200)
	.height(200)
```

The module has some defaults and provide some configs, then, D3.js is explicitly required to complete the initialization:

<p data-height="270" data-theme-id="light" data-slug-hash="MrOQvG" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="MrOQvG" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/MrOQvG/">MrOQvG</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## The data structure

Chart libraries usually require specific data structure in order to build something visible. This is perfectly reasonable in order to avoid too much complexity into the lib just to rearrange datasets. On the other hand, it might result annoying restructuring a loaded dataset for a simple chart . 

While some structure is required, the user should be able to specify some structure via configuration. 

I do really love how D3.js allows this kind of configuration by means of custom accessors. This module borrows the same strategy for custom configurations, such as:

```javascript
rivela.barchart()
  .value(d => d.v)
```

<p data-height="270" data-theme-id="light" data-slug-hash="PEOgPx" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="PEOgPx" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/PEOgPx/">PEOgPx</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Further configurations follow the same principle:

<p data-height="270" data-theme-id="light" data-slug-hash="BJmEby" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="BJmEby" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/BJmEby/">BJmEby</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

An additional accessor might allow to specifing the array key in case of more complex dataset structure. This turns very useful on multiple instances of the same chart:

<p data-height="270" data-theme-id="light" data-slug-hash="MrORxm" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="MrORxm" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/MrORxm/">MrORxm</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Other configurations

Dynamic accessors can be powerful also in other situation such as how to tint items based on some logic. Instead of putting this logic within the chart generator, let's rely on the full power of D3.js:

<p data-height="270" data-theme-id="light" data-slug-hash="LeOvaJ" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="LeOvaJ" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/LeOvaJ/">LeOvaJ</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Dynamic

The module is designed to accept updates. In this example you can push the 'update' button to add random data points: 

<p data-height="270" data-theme-id="light" data-slug-hash="BJmEEy" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="BJmEEy" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/BJmEEy/">BJmEEy</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Style

I truly believe that styling should belong to CSS as much as possible. This is not always easy nor possible to do because some styles need to be calculated using javascript. Nevertheless, good implementation design can help a lot.

Here an example about how to transform the default style through CSS:

<p data-height="270" data-theme-id="light" data-slug-hash="EobJJE" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="EobJJE" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/EobJJE/">EobJJE</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Conclusion

I'm quite happy of this stage so far. As I said, I want to conduct a bottom-up process, therefore, we'll see what is going to become in the near future.

Stay tuned.