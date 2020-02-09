---
title: Vue and dynamic run-time compiled templates
date: 2020-02-09 04:41:00 +0100
subtitle: 9th February, 2020
categories: Logs
tags: [log]
---

If you want to allow a Vue app compiles at **run-time** a given Vue template and you get this issue:

```shell
You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```

after trying something like:

```html
<template>
  <div id="app">
    <component :is="mysrc"></component>
  </div>
</template>

<script>

export default {
  data(){
    return{
      mysrc:{
        	template:`<div>{{Math.random()}}</div>`
      }
    }
  }
}
</script>
```

Here the solution, thanks to this [article](https://code.luasoftware.com/tutorials/vuejs/vue-cli-3-include-runtime-compiler/), to be put in `vue.config.js`:

```js
module.exports = {
    runtimeCompiler: true
}
```

