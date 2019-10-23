---
title: Vue CLI 4 and ESLint rules
date: 2019-10-23 11:29:00 +0100
subtitle: 23rd October, 2019
categories: Logs
tags: [log]
---

I've upgraded to [Vue CLI version 4](https://cli.vuejs.org) in order to stay updated with my preferred toolchain but, apparently, they changed the default level of ESLint which I find a bit annoying.

With the default setting what was a simple **Warning** before, now it's an **Error** that stops the build process.

It happend to throw a `console.log` sometimes but right now you can't use it anymore because the ESLint behavior..

Now my project requires a further setting to meet my preferences. I have to create a `.eslintrc.js` file with this setting:

```js
module.exports = {
    extends: [
      'plugin:vue/base'
    ]
  }
```

in order to get back to the previous behavior.

Oooook.