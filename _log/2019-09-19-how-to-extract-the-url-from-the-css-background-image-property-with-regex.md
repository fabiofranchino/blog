---
title: How to extract the URL from the CSS background-image property with RegEx
date: 2019-09-19 12:19:00 +0100
subtitle: 19th September, 2019
categories: Logs
tags: [log]
---

A snippet of code I found on my hard-drive that might be useful, thus, I want to document here.

It's a simple Reg-exp to extract the full URL from a CSS `background-image` url property:

```javascript
// you have
var csspath = 'url(myImage.png)'

// and want to get 'myImage.png'
var reg = new RegExp(/url\((.*)\)/gim)
var cleanPath = reg.exec(csspath)
if(cleanPath) console.log(cleanPath[1])
```

Have fun!