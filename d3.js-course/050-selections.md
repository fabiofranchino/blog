---
title: Include the library
layout: dataviz
last_modified_at: 2017-08-12
permalink: d3-viz-course/include-the-library
categories: [adv]
---

If you're looking for a quick tutorial about kicking off your desire to make something out of the popular d3.js library, you're in the right place.

Importing the library in an empty document is straightforward task unless you still need to set up the initial HTML document and the editor on your computer.
In this case you can take a look on my [How to get started with HTML](http://dudesgoods.com/blog/2016/07/30/how_to_get_started_with_html.html) and [More on HTML](http://dudesgoods.com/blog/2016/08/05/more_on_html.html) in order to feel right following this article.

In this tutorial you're are going to write down your first d3 javascript lines of code in order to start to grasp its basic features.

## Import the library

The quickest way to include d3.js into an HTML document is to use the remote url, the one you can easily find in the front page of its site:

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
```

You can place this tag everywhere, the important thing to remember is it need to be **before** your custom js code.

Here a minimal HTML document for a d3.js sketch:

```html
<!DOCTYPE html>
<html>
  
  <head>
    <script src="https://d3js.org/d3.v4.min.js"></script>
  </head>

	<body>
		<svg></svg>

      <script>
		console.log( 'What is the version?', d3.version ) 
	  </script>
	</body>
</html>
```

Opening the **console** tool in the Chrome **DevTools** you should see the current version of the imported d3.js library:



A better project organization would be using an external file for the custom js code, thus a revisit of the starting project file would be:

```html
<!DOCTYPE html>
<html>

	<body>
		<svg></svg>
		<script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>
		<script src="app.js"></script>
	</body>
</html>
```

## Select something

The first principle you need to understand is the selection paradigm.
Everytime you need to create or edit something, you need to select the element you are going to manipulate.

In d3.js the selection principle inherit totally the CSS specification, indeed in d3.js you select element using the same syntax used with CSS in the [DOM]().

If you know how CSS selection works you already know how jQuery and d3.js selection work. In the same way.

```js
// Select the first node in DOM:
var oneP = d3.select('p')
console.log(oneP)

// Select all nodes occourrence:
var allP = d3.selectAll('p')
console.log(allP)

// Structured selection:
var first_level = d3.select('ul')
var nested = first_level.select('ul')
console.log( nested )

// Select by class attribute:
d3.select('.alert')

// Get the text content from selection:
var el = d3.select('p')
console.log( el.text() )

// Get raw html content from selection:
var el = d3.select('p')
console.log( el.html() )

// Get the value of an attribute:
var el = d3.select('p')
console.log( el.attr('title') )

// Get the value of a inline style:
var el = d3.select('p')
console.log( el.style('border') )
```

## Manipulate something

D3.js allows to manipulate the DOM with some specific methods that are easy to remember, here some usage examples:

```js
// Create a new element in DOM:
var body = d3.select('body');
body.append('p')
    .text('New Element')


// Add attribute:
d3.select('p')
    .attr('title', 'some title');


// Set a style:
d3.select('p')
    .style('background-color', '#ddd');


// Set a class:
d3.select('p')
    .classed('myColor', true);


// Remove a class:
d3.select('p')
    .classed('myColor', false);


// Prepend an element:
var body = d3.select('body');
body.insert('h4', 'p')
    .text('I \'m prependeding p');


// Remove an element:
var el = d3.select('.red');
el.remove(); 
```

## The chain syntax

It's usual to find d3.js examples written with the following convention:

```js
// select the svg, then set its width and height
d3.select('p')    
    .attr('title','some title')
    .attr('class','someClass')
```

One instruction per line, for easy reading, some examples here:

```js
// select the svg, then set its width and height attributes
d3.select('svg')    
    .attr('width', 500)
    .attr('height', 600)

// select all the rects and set their width and height attributes
d3.selectAll('rect')
    .attr('width', 100)
    .attr('height', 50)

// select all the elements with class 'r1' and set their fill style and y attribute
d3.selectAll('.r1')
    .style('fill', 'purple')
    .attr('y', 100)
```

## Some SVG primitives with d3.js

Here a quick reference about how to create simple shapes into a given SVG tag:

```js
// assuming the target svg selected with this line
var svg = d3.select('svg')

// Rectangle
svg.append('rect')
    .attr('width', 240)
    .attr('height', 30)
    .attr('x', 40)
    .attr('y', 10)
    .style('fill', '#f00')
    .style('stroke', '#000')


// Round Rect
svg.append('rect')
    .attr('width', 240)
    .attr('height', 30)
    .attr('x', 40)
    .attr('y', 100)
    .attr('rx', 10)
    .attr('ry', 10)
    .style('fill', 'orange')
    .style('stroke', '#000')


// Circle
svg.append('circle')
    .attr('cx', 240)
    .attr('cy', 30)
    .attr('r', 50)
    .style('fill', '#f00')
    .style('stroke', '#000')


// Ellipse
svg.append('ellipse')
    .attr('cx', 240)
    .attr('cy', 30)
    .attr('rx', 40)
    .attr('ry', 10)
    .style('fill', '#f00')
    .style('stroke', '#000')


// Line
svg.append('line')
    .attr('x1', 80)
    .attr('x2', 120)
    .attr('y1', 30)
    .attr('y2', 30)
    .style('stroke', '#000')
    .style('stroke-width', 8)


// Text
svg.append('text')
    .text('Simple Text')
    .attr('x', 150)
    .attr('y', 35)
    .attr('text-anchor', 'middle') // yes! this means align:center
    .attr('transform', 'rotate(20 150,35)')
    .style('fill', '#09f')



// G element (group)
layer = svg.append('g')
    .attr('transform', 'translate(320, 30)')

layer.append('circle')
    .attr('r', 25)
    .style('fill', 'purple')

layer.append('text')
    .text('GROUP')
    .style('font-family', 'arial')
    .style('font-size', 12)
    .attr('x', 0)
    .attr('y', 0)
    .attr('dy', 5)
    .attr('text-anchor', 'middle')
    .style('fill', '#fff')     
```
Go to the next lesson: [060-transitions.md](060-transitions.md)