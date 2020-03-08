---
title: Extract the URL from CSS, a better way
date: 2020-03-08 11:32:00 +0100
subtitle: 8th March, 2020
categories: Logs
tags: [log]
---

I've put a simple way to extract from a CSS code an asset URL [here](/blog/log/how-to-extract-the-url-from-the-css-background-image-property-with-regex).

I want to update that reference with something better that is able to handle more edge cases.

I've learned a better code [here](https://github.com/bubkoo/html-to-image/commit/8755c31a40fe4854d9856a22fdf261a92f65a64e).

So, here a better reg-ex to achieve the same task:

```javascript
new RegExp(/url\(["']?([^"')]+)["']?\)/gi)
```

