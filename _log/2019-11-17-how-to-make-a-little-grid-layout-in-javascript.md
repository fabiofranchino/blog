---
title: How to make a little grid layout in Javascript
date: 2019-11-17 12:13:00 +0100
subtitle: 17th November, 2019
categories: Logs
tags: [log]
---

If you want to position elements in a grid layout with javascript, it's better to create an array with useful parameters first.

Here the snippet to build it:

```javascript
// filename: grid.js
export (cols, rows) => {
  const arr = []
  for (let i = 0; i < cols; ++i) {
    for (let j = 0; j < rows; ++j) {
      arr.push({ x: i, y: j })
    }
  }
  return { arr, cols, rows }
}
```

With this little module you can compute an array that can be used to position elements in a grid layout:

```java
import grid from './grid.js'
const myGrid = grid(10, 15) 
```

And here the code to draw something on screen, using d3.js in my case:

```javascript
// it's assumed there are width and height of the canvas available
let sidew = width / grid.cols
let sideh = height / grid.rows
            
d3.select('svg')
  .selectAll('rect')
  .data(myGrid.arr)
  .enter()
  .append('rect')
  .attr('width', sidew)
  .attr('height', sideh)
  .attr('x', (d,i) => d.x * sidew)
  .attr('y', (d,i) => d.y * sideh)
```

