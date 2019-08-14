---
title: Format Date with native methods in Javascript
date: 2019-08-14 07:22:00 +0100
subtitle: 14th August, 2019
categories: Logs
tags: [log]
---

Another little jam learned today.

I have to format dates and for that task I've usually relied to `moment` library.

This time I wanted to try a different route exploring some built-in methods.

Nowadays, you can use the `.toLocaleDateString` method of the `Date` object to performe some basic formatting.

Here how it looks like:

```
let date = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })
```

There's the **locale** parameter and an optional configuration which is well [documented](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) here.

For basic formatting  the above options are good enough.