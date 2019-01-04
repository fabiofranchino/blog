---
title: Collection of useful regular expressions
---

## How to extract the URL from the CSS background-image property with RegEx:

```javascript
// you have
var csspath = 'url(myImage.png)'

// and want to get 'myImage.png'
var reg = new RegExp(/url\((.*)\)/gim)
var cleanPath = reg.exec(csspath)
if(cleanPath) console.log(cleanPath[1])
```

