---
title: Get keyboard events from an HTML element
date: 2020-06-15 10:51:00 +0100
subtitle: 15th June, 2020
categories: Tips
---

Get keyboard events from an HTML element

TIL how to listen for keyboard events from a specific HTML element.

It's about adding this attribute:

```html
<div tabindex="0"></div>
```

then, attach the listener:

```js
let el = document.querySelector('div')
el.addEventListener('keydown', e => {
  console.log(e)
})
```

this way the above function will be called when the user last click has been done on that element.

The nice part is that it works with many elements out of the box, proof [here](https://codepen.io/abusedmedia/pen/JjGRdRM?editors=1010).

