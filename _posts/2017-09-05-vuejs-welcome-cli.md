---
title: "Vue.js: welcome CLI"
date: 2017-09-05 14:00:00 +0100
subtitle: 5th September, 2017
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, vue, cli, basic, nuxt]
---

In this [article](/blog/vuejs-nice-to-meet-you), I've documented my experience on getting started with [Vue.js](https://vuejs.org/).

This time, I wanted to start using the official [suggested setup](https://vuejs.org/v2/guide/single-file-components.html), which supports the *.vue* file format and other very interesting features.

The setup configuration is quite complex, however, with the [vue-cli](https://github.com/vuejs/vue-cli) (the Vue Command Line Interface) it's a no brainer task.

All you have to do is to install it on your system using `node` and `npm` with:

```shell
npm install -g vue-cli
```

Once you have the CLI installed, you can run `vue` commands (from the Terminal/Shell) in order to bootstrap empty projects ready to start with alongside powerful features such as *ES6 transpiler*, *hot reloading*, *CSS scoped*, just to mention a few.

You can choose between different scaffolding projects, based on complexity and thoroughness, my choice has been (with a proper *projectName*):

```shell
vue init webpack-simple <projectName>
```

After that, you need to install the modules and run the development session:

```shell
cd <projectName>
npm install
npm run dev
```

Your browser should run with a sample Vue app. If you edit some files you should see the change almost in real time.

With this setup, the `src` folder is the place for the source files. A minimal Vue app needs the following files in order to compile correctly:

- An `index.html` in root folder (the default one is ok)
- A `src/main.js` file to bootstrap the application loading the components you want to use
- One or more `.vue` files representing the Vue components.


Each `.vue` file is a component that means:

```html
<template></template>

<script></script>

<style></style>
```

A markup fragment, a script for business logic, a local style definition. That's all soo right.

I've always struggled with the `css` and `js` folders full of files of the same type but not related in any ways to each other. The component structure resonates much more clear to me.

## Creating a component

Create and save a new `.vue` file (let's say `MyComponent.vue`) within the `src` folder. Add the three parts belonging to a component (at least the *template*, optionally with *script* and *style*):

```html
<template>
  <div>
    <h1>Thi is a component title</h1>
  </div>
</template>
```

and use it from within any other `.vue` file with this code:

```html
<template>
  <div>
    <mycom />
  </div>
</template>


<script>
import mycom from './MyComponent.vue'

export default {
  components: {
    mycom
  }
}
</script>
```

This way the markup, the style and the logic will be rendered within the above main component.

## Even better

So far, Vue.js is very promising to me. Everything is crystal clear and I really love the way it can be learned incrementally. Then, by chance, I've discovered [Nuxt](https://nuxtjs.org). 

I've spent a lot of time over the last few years trying to figure out a way to develop front-end apps with **happiness**. I've even developed and released a couple of libraries ([static-player](https://www.npmjs.com/package/static-player) and [grunt-static-player](https://www.npmjs.com/package/grunt-static-player)) to develop web apps using dynamic injections with the possibility to bake it as static web app (for SEO and performance purposes). We currently use them for our web projects but, for the first time, I'm seriously considering to dismiss them in favor of **Vue.js+Nuxt**.

After a first check, I do believe they are awesome and they will be a **game changer**. Try it with:

```shell
vue init nuxt-community/starter-template <projectName>
```

and follow the well-done documentation [here](https://nuxtjs.org/).

More to come...