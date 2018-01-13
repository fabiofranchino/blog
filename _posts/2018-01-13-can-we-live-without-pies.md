---
title: Can we live without pies?
date: 2018-01-13 14:00:00 +0100
subtitle: 13th January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, rivela, d3js, template, reusable, proof, chart]
---

Cakes are delicious, thus, no! We cannot live without pies.

In this further iteration of my D3.js reusable templates journey, here another module that allows generating a pie/donut chart type with D3.js.

To learn more about some of the core principles, please refer to my previous [article](/blog/might-become-a-lib/).

As in the [previous module](/blog/might-become-a-lib/), the bootstrap relies to the D3.js data binding mechanism. A pie can become a donut by a metter of a config:

<p data-height="270" data-theme-id="light" data-slug-hash="PEemKV" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="PEemKV" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/PEemKV/">PEemKV</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

By using some accessors it is possible to instruct the generator about how to use the given dataset without restructuring it as well as using custom function to tint elements:

<p data-height="270" data-theme-id="light" data-slug-hash="ypjbPe" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="ypjbPe" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/ypjbPe/">ypjbPe</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## It's dynamic

This module can receive data updates therefore the chart update accordingly (push the 'update' button):

<p data-height="290" data-theme-id="light" data-slug-hash="XVqRVM" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="XVqRVM" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/XVqRVM/">XVqRVM</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Beyond the Pie

The radius configuration can accept functions, thus, it opens up several way to build representation based on the pie/donut model:

<p data-height="270" data-theme-id="light" data-slug-hash="xpjdpX" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="xpjdpX" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/xpjdpX/">xpjdpX</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The spirit of the whole project is to make easy further customizations using D3.js instead baking all the possibile user requirements within it:

<p data-height="270" data-theme-id="light" data-slug-hash="RxyVxe" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="RxyVxe" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/RxyVxe/">RxyVxe</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Interoperability

This is another major principle of the project: allowing easy interoperability between components such as this little initial example.

Click on each slice to see the result of this demo:

<p data-height="270" data-theme-id="light" data-slug-hash="WdJjMN" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="WdJjMN" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/WdJjMN/">WdJjMN</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## UI elements

Nothing stop to use this module as a tiny UI element such as a little gauge:

<p data-height="290" data-theme-id="light" data-slug-hash="GydmQP" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="GydmQP" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/GydmQP/">GydmQP</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## So far

Still happy of the results nevertheless some changes over the road. 

Let's see the next episode!