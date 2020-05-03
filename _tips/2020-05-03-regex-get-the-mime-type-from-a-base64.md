---
title: RegEx Get the mime-type from a Base64
date: 2020-05-03 05:14:00 +0100
subtitle: 3rd May, 2020
categories: Tips
---

Quite simple but I had to do a bit of trial and error:

```js
let yourImage = 'data:image/jpeg;base64,hghSTHGSVHBj...'
let reg = new RegExp(/data:(.*);base64/gi)
let mime = reg.exec(s)[1]
```

