---
title: How to enable CORS on Vue CLI serve
date: 2020-02-15 13:27:00 +0100
subtitle: 15th February, 2020
categories: Logs
tags: [log]
---

Today I've learned how to enable CORS when using the local webserver of Vue-CLI during development.

Here the tip learned [here](https://stackoverflow.com/questions/54765638/vue-cli3-enable-cors). Just add or create the `vue.config.js` file with:

```js
module.exports = {
  configureWebpack: {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  }
}
```

