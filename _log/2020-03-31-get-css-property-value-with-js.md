---
title: Get CSS property value with JS
date: 2020-03-31 13:36:00 +0100
subtitle: 31st March, 2020
categories: Logs
tags: [log]
---

Get CSS property value with JS

Just a little reminder to myself about reading the value of a CSS property (variable) using javascript:

```js
getComputedStyle(element).getPropertyValue('--myprop')
```

Of course, if the value is numeric, it's going to have its unit attached, such as '10px'

Just strip it to have the pure number:

```javascript
getComputedStyle(element).getPropertyValue('--myprop').replace('px', '')
```

