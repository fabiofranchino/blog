---
title: Check if source contains a valid IFRAME code
date: 2019-08-22 08:24:00 +0100
subtitle: 22nd August, 2019
categories: Logs
tags: [log]
---

This is the regular expression I use to be sure if an arbitrary mark-up is an actual valid `iframe` code or not:

```js
let someMarkupCode = '...'

let re = /<iframe [.\s\S]*<\/\s*?iframe>/gim
let check = someMarkupCode.match(re)

if (check && check.length > 0) {
  console.log('is an IFRAME')
} else {
  console.log('is not!')
}
```

That's it!