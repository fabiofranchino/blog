---
title: Allow getImageData from remote images
date: 2020-01-19 08:52:00 +0100
subtitle: 19th January, 2020
categories: Logs
tags: [log]
---

Today I've learned how to allow the browser when using the canvas method `getImageData` if the image has been loaded remotely.

I've found the trick [here](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image) and it's quite straightforward:

Give the following snippet to download an image:

```javascript
const img = new Image()
img.src = 'http://www.example.com/image.jpg'
img.onload = () => {
  // performe some manipulation
}
```

You need to add `img.crossOrigin = "Anonymous"` to the loader object:

```javascript
const img = new Image()
img.crossOrigin = "Anonymous"
img.src = 'http://www.example.com/image.jpg'
img.onload = () => {
  // performe some manipulation
}
```

It's just work!