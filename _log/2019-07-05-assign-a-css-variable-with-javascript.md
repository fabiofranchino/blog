---
title: Assign a CSS variable with Javascript
date: 2019-07-05 06:31:00 +0100
subtitle: 5th July, 2019
categories: Logs
tags: [log]
---

This is what makes the web platform great, the interconnections between the inner technologies such as CSS and Javascript.

Nowadays, in CSS you can have `variables`, or more properly named `properties`. They are great at defining values that need to be changed at run-time.

Those variable' values can be changed both from CSS selectors and Javscript functions as well.

Here the code. Suppose this CSS declaration:

```css
body{
  --myColor: red;
}

p{
  color: var(--myColor);
}
```

and here the js to change it at run time based on some arbitrary event:

```javascript
document.body.style.setProperty('--myColor', 'green')
```

You can change it in the proper DOM element or in any other elements, exploiting the cascading model of CSS as well.

