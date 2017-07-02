---
title: "ES6 and D3.js: sweet"
date: 2017-07-01 14:00:00 +0100
subtitle: 1st July, 2017
style: blue
---

I'm learning javascript ES6 in small steps.

So far, I'm quite confident writing arrow functions and template strings.

In the D3.js world, even those little features bring huge benefits from code readability point of view.

## Arrow function

Let's consider a very common and frequent chunk of code in a D3.js script:

```javascript
d3.selectAll('rect')
	.attr('x', function(d, i){
		return d.x
	})
```

With ES6 it can be reduced like this:

```javascript
d3.selectAll('rect')
	.attr('x', d => d.x)
```

Cleaner, uh?

Arrow functions are not meant to be a [full replacement](https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch) of the original one. Due the different nature of them, there are situations where you have to use the old fashioned **function** statement, in particular when you need to use the **this** keyword, such as:

```javascript
d3.select('circle')
	.on('clic', function(){
		console.log( this )
	})
```

The same using the arrow function won't work as expected since the scope of **this** will be different.

## String interpolation

Another common operation in D3.js script is the string interpolation, such as:

```javascript
d3.selectAll('g')
	.attr('transform', function(d, i){
		return 'translate(' + mapX(i) + ', 0)')
	})
```

Again, with ES6 things get compact and readable:

```javascript
d3.selectAll('g')
	.attr('transform', function(d, i){
		return `translate(${mapX(i)}, 0)`
	})
```

And even better with the arrow function:

```javascript
d3.selectAll('g')
	.attr('transform', (d, i) => `translate(${mapX(i)}, 0)`)
```

**ES6 is great** and it deserves some time to embrace it in the daily work.  
To be honest, I'm still using **var** to declare a variable instead of **let** or **const**, though.  
I guess I need to commit myself more on it.