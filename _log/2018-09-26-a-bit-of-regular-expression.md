---
title: A bit of Regular Expression
date: 2018-09-26 14:45:00 +0100
subtitle: 26th September, 2018
categories: Logs
tags: [log]
---

Nothing fancy but, as always, knowing a bit of Regular Expression helps a lot sometimes.

Today has been: how to grab the path from within the `url()` of a `background-image` in a CSS rule:

```javascript
// my string
var str = 'url(/uploads/VBDtr3S5WAolwjD.jpg)'

// the RegEx
var re = new RegExp('url\\((.*)\\)', 'gm')
var res = re.exec(str)

console.log(res[1]) // '/uploads/13ji57/VBDtr3S5WAolwjD.jpg'
```

