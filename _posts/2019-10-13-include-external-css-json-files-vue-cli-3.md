---
title: Include external CSS and JSON files with Vue-CLI 3
date: 2019-10-13 19:00:00 +0100
subtitle: 13th October, 2019
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, vue, css, cli, json]
---

A little reminder about how to include external files in a **Vue.js app** using the **Vue-CLI 3**.

## Include a CSS file

Here a Vue component (using the *.vue* format) with both a CSS library and a custom CSS file that need to be included in the build:

```html
<template>
  <div>
  </div>
</template>

<script type="text/javascript">
  import Buttons from './buttons.css'
  import Normalize from 'normalize-css'
  
  export default{
  }
</script>
```

The above component will inject both the normalize CSS library as well as the custom CSS one. Typically, a CSS library should be included across the whole application, thus, it's better to add it in the App.vue file.

## Include a JS (data purpose) or a JSON file

You can include at built-time (meaning, it will be injected in the build, thus, if you change the external file you need to rebuild the app to see the effect) also Javascript and JSON file as well.

Suppose you have this `data.js` file:

```js
export default{
  list: [1, 5, 3, 45, 34, 23, 5]
}
```

and you want to use it in your Vue component, such as:

```html
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
  </div>
</template>


<script type="text/javascript">
  import data from './data.js'

  export default{
    data(){
      return{
        list: data.list
      }
    }
  }
</script>
```

The same can be done with a .json file:

```json
{
  "list": [1, 5, 3, 45, 34, 23, 5]
}
```

Remember that those files are not loaded at run-time (such as ajax) but they are included in the build as they were writter straight in the source code.

Hope this help.