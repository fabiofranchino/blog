---
title: Going towards reusable D3.js charts
date: 2017-08-02 14:00:00 +0100
subtitle: 2nd August, 2017
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, d3js, tips, reusable, proof, boilerplate]
---

> Reusable code in programming field has been always a chimera.

Over the last few days, I've thought quite often about making reusable [D3.js](https://d3js.org/) components. 
I perfectly know that writing code that should be also reusable basically means ending up to build some *yet-another-library*.  
In the D3.js context, that would mean to reach to some yet-another-library built on top of D3.js.

![](../assets/posts/going-towards-reusable-d3js-charts/cover.png)

I don't want to build a library. My premises are a little bit different.  
What I'm thinking is something that is easy to use, easy to extend, easy to combine and all that shit without putting too much complexity in it, simple ah? 

I did some research and studies on some existing thirty part libraries without ending up to any brilliant idea.  
Then, I've stumbled upon (again, since I've read it a few years ago) [this](https://bost.ocks.org/mike/chart/) evergreen article from the maintainer of D3.js, Mike Bostock.

I've enjoyed it as it was the first time but now the last paragraph clicked something in me.  
Building a reusable component requires making decisions about the **level of configuration** you want to expose and at the same time **the limits** the component will force the user to.

So, what about building a collection of components ready to be used but at the same time ready to be modified, forgetting the benefit of the incremental improvements a library can provide?.

A more elaborate statement might be rephrased as: a reusable component is something can be used very fast with few configuration and few functionalities. If I need further features I can modify the source code. That means, no black-box library easy to update but more a boilerplate of components to start with.

The mentioned article outline also some good advice to make D3.js plugins using the D3-way.  
Basically, it's how the [d3-axis](https://github.com/d3/d3-axis) object works.

## Proof Of Concept

Everything starts with an immediately-invoked-function-expression ([IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)) js function in order to encapsulate the component in a private context alongside with some of the Mike article tips, more precisely, the selection.each statement to preserve the D3.js selection chain:

```javascript
;(function () {
  window.myViz = function init () {

    // the build/update function, where all the magic should happen
    function build (selection) {
      selection.each(function (data, index) {
        var element = d3.select(this)
        console.log(data)
      })
    }

    return build
  }
})()
```

This module can be used in common D3.js script such as:

```javascript
var vis = myViz()

var svg = d3.select('svg')
	.datum([])
	.call(vis)    

d3.select('body').on('click', function(){
	svg.call(vis)
})
```

As you might notice, in the **build** function we can use both the selection and the data bound to it to handle the chart creation and update as well.

When talking about reusable scripts means also having some configs, therefore, here my version of some default:

```javascript
;(function () {
  window.myViz = function init () {
    build.width = 300
    build.height = 200
    ....
```

and a way to override them from outside:

```javascript
build.config = function (options) {
  for (var k in options) {
    if (build.hasOwnProperty(k)) {
    	build[k] = options[k]
    }
  }
  return build
}
```

In this way the object can be configured as the following code:

```javascript
var vis = myViz()
	.config({width:1000})
```

Now it's time to build something in the **build** function. Adding the following chunk of code within the function we're able to add a text label to our chart:

```javascript
element.append('text')
	.text('My chart: ' + build.width + ' ' + data.length)
	.attr('y', build.height / 2)
	.attr('x', build.width / 2)
	.style('text-anchor', 'middle')
```

That last code arose immediately an issue. For each **build** call, a new text element will be generated. This is not our goal. We want to append a text element only during the first function call. The following calls should reuse the same text element updating the content or the position.

I've spent a bit of time figuring out the best solution, an elegant solution to distinguish the first time call from the following calls.

Initially, I set a flag, an 'inited' status using a class name in the container. That doesn't ring right to me. I've continued to dig trying to find a better way. Finally, I started to peep in the source code of D3.js, specifically the d3-axis source code trying to find out how it has been implemented a similar scenario.

It turned out a clever trick to check if an element is present or not in order to route different business logic. It relies actually on the *data-join* mechanism of D3.js, what else?

Here the code:

```javascript
// data binding with a fake dataset
var label = element.selectAll('.myLabel')
	.data([null])

// enter selection, only if the element is not present
var enterLabel = label.enter()
  .append('text')
  .attr('y', build.height / 2)
  .attr('x', build.width / 2)
  .style('text-anchor', 'middle')
  .classed('myLabel', true)

// update
label.merge(enterLabel).text('Your chart: ' + build.width + ' ' + data.length)
```

Kudos to it. A very elegant and pure-D3-way solution to handle the different phase of the component. The above code will work nicely even, for some reason, the element will be removed.

## Conclusion

So far, I'm quite happy of this proof-of-concept. I'll try to build a real-world component following this principles in order to test, whether or not, it can be a viable solution to develop a collection of components that can be both useable as-is and editable further or even just to learn some technique out of them.

You can find the full source code of this proof-of-concept [here](https://github.com/fabiofranchino/towards-reusable-d3-components).