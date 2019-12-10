---
title: Check if it's a touch enabled device
date: 2019-11-23 04:22:00 +0100
subtitle: 23rd November, 2019
categories: Logs
tags: [log]
---

A little reminder to myself to detect on a web app it the device is touch enabled or not, no matter the veiwport dimension:

```js
if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  console.log('is touch enabled')
}
```

