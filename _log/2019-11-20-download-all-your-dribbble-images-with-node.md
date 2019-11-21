---
title: Download all your Dribbble images with Node
date: 2019-11-20 14:19:00 +0100
subtitle: 20th November, 2019
categories: Logs
tags: [log]
---

If you want to donwload all your images from Dribbble, you can do this way:

First off, download your data archive from your account. You'll get a json file.

Then, create a folder and put that json in, then install the `axios` dependency with `npm install axios`. 

Finally, use the following script (put it in an `index.js` file) and run it with `node index.js` command:

```js
const axios = require('axios')
const fs = require('fs')

const data = require('./export.json')

const arr = data.shots

arr.forEach(async d => {
  const p = d.images.hidpi
  const parts = p.split('/')
  const name = parts[parts.length - 1]

  const img = await axios.get(p, { responseType: 'arraybuffer' })
  fs.writeFileSync(`./images/${name}`, img.data, 'binary')
})
```

The above script will download the hight-res image for each shot.

Enjoy!