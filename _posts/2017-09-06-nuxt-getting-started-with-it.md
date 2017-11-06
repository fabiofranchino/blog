---
title: "Nuxt: getting started with it"
date: 2017-09-06 14:00:00 +0100
subtitle: 6th September, 2017
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, nuxt, vue, basic, start]
---

I'm very excited about [Nuxt](https://nuxtjs.org/).  
I can't help but try it as soon as possible, so here I am.

This time, instead of using some magic command to start with a scaffolding, I went to a different route, starting from scratch setting up and working on a project with an empty folder as the starting point. 

<!-- main_ad -->

Surprisingly, everything went smooth and clear to me.

So, let's have this journey together to create a universal Vue app with Nuxt. 

Run the Terminal and type:

```shell
mkdir testProject
cd testProject
```

Then, set up a npm project with (filling the required fields):

```shell
npm init
```

Then, install Nuxt:

```shell
npm install nuxt --save
```

We need to add the first script alias within the `package.json` file:

```json
"scripts": {
    "dev": "nuxt"
}
```

Now we can run it to start a development session. Before it, we need to create a required folder: the `pages` folder within the project. Now run the command `npm run dev` and go with your browser to **http://localhost:3000**

## Pages

To see something on screen, we need to create our first Vue component (such as index.vue) within the `pages` folder using this minimal template:

```html
<template>
  <h1>Title</h1>
</template>
```

Now it's time to create a couple of components for our website, let's say a header and a footer so we can potentially reuse them on different pages.

## Components

Let's create a new folder named `components` placing in it a couple of Vue components, `header.vue` and `footer.vue`:

```html
<template>
  <header>This is the header</header>
</template>

<style scoped>
  header{
    background-color: #ccc;
  }
</style>
```

This is an example for the header component. Now it's time to use them in out page:

```html
<template>
  <div>
    <Head />
    <h1>Index</h1>
  </div>
</template>

<script>
import Head from '~/components/header.vue'

export default{
  components:{
    Head
  }
}
</script>
```

As you might notice, I've changed a bit in the markup because a single wrapper is required in a Vue template, thus a generic `div` has been added to wrap both the new component and the h1 tag as well.

In the javascript portion, you can see how to import a component in order to use it in the template markup.

## Layouts

Usually, it's better to have some master layout that can be used by several pages. Nuxt allows defining different layouts in a `layouts` folder.

A layout in Nuxt is a regular Vue component with the special tag `nuxt`. This is, for example, the default layout (default.vue):

```html
<template>
  <div>
    <nuxt />
  </div>
</template>
```

You can modify it as your convenience, adding style and logic to it. All the pages will get updated accordingly. The `nuxt` tag will be replaced with the page content (PS: sometimes the hot reloading doesn't work properly, just refresh the browser to see the updates).

On each page you can define which layout should be used with the property `layout`:

```html
<template>
  <div>
    <Head />
    <h1>About</h1>
  </div>
</template>

<script>
export default{
  layout: 'other'
}
</script>
```

## Static website

So far, we created a very simple website Vue-driven. This means a SPA (Single Page Application) that usually doesn't play nice with SEO, search engines, social crawlers, etc.

Therefore, this is the main reason why I'm so excited about Nuxt. The ability to bake the whole web app as static website is terrific. You only need to use the command `nuxt generate` to do that. Remember to update the `package.json` with the new command:

```json
"scripts": {
    "dev": "nuxt",
    "generate": "nuxt generate"
},
```

now you can run `npm run generate` in a new Terminal window (keep the `dev` process active).

This process will generate for each page a static version of it preserving all the logic and the functionalities of the SPA version. Neat, isn't it? 

Source files [here](https://github.com/fabiofranchino/nuxt-getting-started).