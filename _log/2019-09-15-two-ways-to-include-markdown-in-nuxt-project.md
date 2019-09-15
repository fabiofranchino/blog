---
title: Two ways to include markdown in Nuxt project
date: 2019-09-15 04:53:00 +0100
subtitle: 15th September, 2019
categories: Logs
tags: [log]
---

Two ways to include markdown in Nuxt project

Today I've learned how to include quickly markdown content in a Nuxt project. There are mainly two ways.

The quickest one, with a dedicated Vue component or page:

```vue
<template>
    <div v-html="md"></div>
</template>

<script>
import MD from './my-content.md'

export default {
  computed:{
      md(){
        return MD
      }
  }
}
</script>
```

or with a more scalable approach using a dynamic Nuxt Page (as `/pages/mytypeofcontent/_id.vue`):

```vue
<template>
    <div v-html="html"></div>
</template>


<script>
export default {
    async asyncData({ params }) {
        return await import(`~/content/mytypeofcontent/${params.id}.md`)
    }
}
</script>
```

The above method allows to put many markdown files in the `content/mytypeofcontent` folder and one single Vue template to visualize them according to the slug passed by the browser.

You have also a proper webpack loader configured in `nuxt.config.js`, such as:

```js
export default{
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      })
    }
  }
}
```

This is also the approach to create a markdown driven blog with Nuxt as well.