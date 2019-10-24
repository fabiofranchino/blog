---
title: Convert FileList into Array
date: 2019-10-24 05:05:00 +0100
subtitle: 24th October, 2019
categories: Logs
tags: [log]
---

From [this source](https://stackoverflow.com/questions/25333488/why-isnt-the-filelist-object-an-array#43796491) today I've learned this trick to convert a FileList object to Array, this way I can use some useful methods such as `.filter` or `.forEach`.

`FileList` is the object you get when using `readAsDataURL` to read the source base64 of an image.

If you are trying to load multiple images, the FileList object is a kind of Array but under the hood is an object, thus you cannot use some specific Array' methods.

Here the one-line convertion with ES6:

```js
const files = [...myFileList]
```

