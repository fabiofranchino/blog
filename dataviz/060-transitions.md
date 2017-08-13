---
title: Transitions, the basic
layout: dataviz
last_modified_at: 2017-08-12
permalink: dataviz/transition-basic
categories: [adv]
---

A transition is a way to animate over time one ore more properties of an element.

Let's say, we want to move a circle on the `x` axes over a period of 2 seconds. Or we want to increase the `height` of a rectangles in 1 second.

The reasons why we animate elements in a visualisation can be vary, here a non-exaustive list:

- We want to engage the user with something attractive
- We want to draw the user attention on a specific part of the visualization
- We want to let the user understand what is going on during a state-transition
- We want to provide feedback upon a specific user action

In general, implementing animations and transitions can be tough. D3.js makes it extremely easy by getting rid of much of the complexity leaving only some configuration options we can use to build our animation system.

In the previous article we covered how D3 creates, select and make change on specific element, such as:

```javascript
d3.select('svg')
  .append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 100)
```

If we want to animate the radius of that circle, here how to :

<lineselect lines="5-7" ></lineselect>

```javascript
d3.select('svg')
  .append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 100)
  .transition()
  .duration(2000)
  .attr('r', 20)
```

The point is: all the properties below the transition statement will be animated according to:

- The duration set
- The initial value set before the transition statement
- The final value set after that

In our example the circle radius will be animated from 100px to 20px over 2 seconds of time.

## Further properties

The transition system can be configured further with the following  properties:

- `duration` in millseconds
- `delay` in milliseconds, the transition wait this period before to start
- `ease` which is the matematical curve to change the behaviour of the animation

Give the previous example, here the same with delay and an easing curve:

<lineselect lines="7-8" ></lineselect>

```javascript
d3.select('svg')
  .append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 100)
  .transition()
  .duration(2000)
  .delay(500)
  .ease(d3.easeElasticInOut)
  .attr('r', 20)
```

## The Easing

The easing curve worth some words since includes some options:

https://bl.ocks.org/d3noob/1ea51d03775b9650e8dfd03474e202fe

## Sequence of transitions

The transitions can be put in sequence like that:

<lineselect lines="8-10" ></lineselect>

```javascript
d3.select('svg')
  .append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 100)
  .transition()
  .duration(2000)
  .attr('r', 20)
  .transition()
  .duration(1000)
  .attr('cx', 100)
```

With this update, after the radius animation the `x` position will be animated from 50px to 100px over 1 second.



## Catching the end of transition

Each transition have a specific event of end of transition, therefore, we can perform additional logic listening to these events.

<lineselect lines="8-11,14-18" ></lineselect>

```javascript
d3.select('svg')
  .append('circle')
  .attr('cx', 50)
  .attr('cy', 50)
  .attr('r', 100)
  .transition()
  .duration(2000)
  .attr('r', 20)
  .on('end' () => {
    // here the logic we want to perform
    // after the first transition
  })
  .transition()
  .duration(1000)
  .attr('cx', 100)
  .on('end' () => {
    // here the logic we want to perform
    // after the second transition
  })
```

## Keep it clean

A good way to keep the code chain in order with multiple transitions is to use the indentation right, such as:

```javascript
d3.select('svg')
  .append('rect')
  .attr('width', 100)
  .attr('height', 0)
  .transition()
    .duration(1000)
    .style('fill', 'orange')
    .attr('height', 100)
  .transition()
    .attr('width', 200)
    .style('fill', 'red')
    .style('opacity', .5)
  .transition()
    .attr('transform', 'rotate(45),scale(.5)')
```

