---
title: Inject SVG in the DOM with Vue.js and CLI
date: 2019-10-13 13:00:00 +0100
subtitle: 13th October, 2019
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, vue, svg, cli, config]
---

By default, `vue-cli`, with its default webpack configuration, allows to process images and svg files in the same way, meaning as external resources.

For instance, the following component will be rendered correctly, whether the relative or absolute paths of the asset as well as if using both the `img` tag or `background-image` CSS property:

```html
<template>
  <div>
    <img src="@/assets/theSvg.svg" />
    <img src="@/assets/theImage.png" />

    <img src="./otherSvg.svg" />
    <img src="./otherImage.png" />
    
    <div class="png"></div>
    <div class="svg"></div>
  </div>
</template>

<style>
.png{
  width:100px;
  height:100px;
  background-image: url(./otherImage.png);
}
.svg{
  width:100px;
  height:100px;
  background-image: url(./otherSvg.svg);
}
</style>
```

## Use a Valid SVG source

There is a caveat that might break some SVG to be loaded properly. If you experience some missing files in your build with SVG files, it might be depend of its source that needs to be valid from specification point of view.

Be sure the SVG tag contains this attribute `xmlns="http://www.w3.org/2000/svg"` such as:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.3 14.3">
</svg>
```

otherwise webpack will fail to load it.

## What about injecting the SVG source

If you want to have at your fingertips the SVG source instead of a linked resource, you need to configure a bit your project.

It's a [well documented](https://www.npmjs.com/package/vue-svg-loader#vue-cli) feature in the officual Vue-CLI 3 documentation, briefly you need to:

- install an additional module: `npm install vue-svg-loader`
- then, add this configuration (``vue.config.js` in the project root folder):

```js
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
```

Run again your watcher (`npm run serve`) to experience the new setting with the following component:

```html
<template>
  <div>
    <MySVG />
  </div>
</template>

<script>
import MySVG from './theSVG.svg'

export default {
  components:{
    MySVG
  }
}
</script>

```

The `MySVG` component will be rendered as SVG DOM that can be manipulated through JS or CSS.

Furthermore, this way you can also configure some SVG options that belong to [SVGO](https://github.com/svg/svgo):

```js
svgRule
  .use('vue-svg-loader')
  .loader('vue-svg-loader')
  .options({
    svgo: {
      plugins: [{ removeViewBox: false }]
    }
  })
```

## One or the other

The problem with the above setting is that you cannot mix injected with external SVGs. If you try the setting, all the external SVG files will fail to load.

Here the solution with a different configuration to handle both scenarios. The `vue.config.js` file now should look like:

```js
module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
  }
}
```

And here the component with the mixed scenario:

```html
<template>
  <div>
    <img src="./otherSvg.svg" />
    <MySVG />
  </div>
</template>

<script>
import MySVG from './otherSvg.svg?inline'

export default {
  components:{
    MySVG
  }
}
</script>
```

Pay attention to the `import` statement the requires the `?inline` fragment to work properly.

Now you can include SVG files in different ways depending of what you need to do with them.