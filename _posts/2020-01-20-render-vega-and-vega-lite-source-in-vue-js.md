---
title: Render Vega and Vega-Lite source in a Vue.js app
date: 2020-01-20 09:00:00 +0100
subtitle: 20th January, 2020
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, vega, vue, charts]
---

I'm poking to the following feature for a while.

> Let the user render Vega/VegaLite charts in [PRESENTA](https://www.presenta.cc)

And here the first POC!

![](/blog/assets/posts/render-vega-and-vega-lite-source-in-vue-js/cover.gif)

Thanks to the [Vega](https://vega.github.io/) resources, it's something reeeeeally straightforward to implement, almost a joke.

Now, some details of a bare-bone example.

In a blank Vue project, install the following dependencies with the command: `npm install vega vega-lite vega-embed`.

Here a basic template for our purpose:

```html
<template>
  <div id="app">
    <div id="viz"></div>
    <div class="edit">
      <textarea v-model="def"></textarea>
    </div>
  </div>
</template>
```

Where `#viz` is the wrapper where to inject the Vega chart using Vega-Embed:

```javascript
import embed from 'vega-embed'

export default {
  async mounted(){
    await embed('#viz', def, {actions:false})
  }
}

```

Where `def` is the json definition of a Vega/Vega-Lite chart.

Now add some glue to call the embed whenever the source changes, such as:

```javascript
import embed from 'vega-embed'

export default {
  data(){
    return{
      def: null
    }
  },
  watch:{
    def(v){
      if(v) this.draw()
    }
  },
  methods:{
    async draw(){
      let def = JSON.parse(this.def)
      await embed('#viz', def, {actions:false})
    }
  }
}
```

And here the way to override the size of the chart to make it full-resizable:

```javascript
async draw(){
  let def = JSON.parse(this.def)

  def.width = 'container'
  def.height = 'container'

  await embed('#viz', def, {actions:false})
}
```

## Issues

When copy/paste a Vega source that contains the data url (the dataset is external) and that url is relative, the chart breaks because it can't find the file. 

This is very common if you copy/paste an example from the official website. Almost all the examples use a relative URL for the dataset definition, such as:

```javascript
"data": { "url": "data/population.json"}
```

In order to make it work again, you need to change it with the full absolute URL:

```javascript
"data": { "url": "https://vega.github.io/vega-lite/data/population.json"}
```

[Here the full source code](https://github.com/fabiofranchino/integrating-vega-with-vue).

## Next

If you want to be notified when [PRESENTA](https://www.presenta.cc) will incorporate this function, get an account from there!