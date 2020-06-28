---
title: VuePress, markdown, Vue components and generate
date: 2020-06-28 08:20:00 +0100
subtitle: 28th June, 2020
categories: Tips
---

Recently I had to mix markdown content with Vue components in a [VuePress](https://vuepress.vuejs.org/) project to create a static website with the awesomeness of Vue reactivity.

Here a sample of what I'm talking about:

```markdown
## Some title

Some text

<myVueComp />

Other regular text
```

the above markdown can be converted in a HTML static file (the SSR thing) preserving the interactivity of a Vue component.

VuePress compiles all that stuff [out of the box](https://vuepress.vuejs.org/guide/using-vue.html) unless the component needs to access to some browser specifics (such as the `window` object).

The `build` function fails in my case because the SSR cannot access the browser and my component requires an exernal components that requires the `window` object.

The workaround is [well documented](https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions) and this is the slightly modified code that I've used to overcome the limitation:

```vue
<template>
	<ClientOnly>
    <myVueComp/>
  </ClientOnly>
</template>

<script>
import Vue from 'vue'
export default {
  mounted () {
    import('./myVueComp.vue').then(module => {
      Vue.component('my-vue-comp', module)
    })
  }
}
</script>
```

