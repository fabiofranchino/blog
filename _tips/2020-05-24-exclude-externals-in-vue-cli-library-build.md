---
title: Exclude externals in Vue Cli Library build
date: 2020-05-24 05:11:00 +0100
subtitle: 24th May, 2020
categories: Tips
---

You can exclude external libraries when compiling you Vue library using the command:

```shell
vue-cli-service build --target lib --name myLib src/myLib.vue
```

by adding in the `vue.config.js` file this webpack config:

```js
configureWebpack: {
  externals: {
    jquery: 'jQuery'
  }
}
```

