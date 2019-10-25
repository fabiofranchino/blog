---
title: Webpack based starterkit for quick web explorations
date: 2019-10-26 07:00:00 +0100
subtitle: 26th October, 2019
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, webpack,  es6, config, js]
---

My current and favorite stack  in web development is based on [Vue.js](https://www.vuejs.org/) with its [CLI](https://cli.vuejs.org/). 

Nevertheless, for simple coding explorations I find it a little overkill. Furthermore, I like to test other possibilities in the field from time to time. 

For that reason, I've explored [Webpack](https://webpack.js.org/) a bit and this post tries to outline the configuration I've set up for my needs.

If you want to benefit from one of more of the following features:

- ES6 modules and  async/await
- Loaders for CSS, SVG, CSV and images
- Hot replacement webserver for development
- Static and external files handled properly

You're welcomed to test my configuration and continue to read as well :)


## Some code snippets for a fast start

### ES6 modules

I want to write encapsulated and reusable js modules without worry about global scope pollution and nested dependencies.

Create a .js file in `src` folder, `src/mod1.js` with

```js
export default {
  some: 'object'
}
```

Create a secondary .js file in `src` folder, `src/mod2.js` with

```js
export default {
  some: 'other object'
}
```

Load them from within `index.js`:

```js
import mod1 from './mod1.js'
import mod2 from './mod2.js'

console.log(mod1, mod2)
```

### ES6 async/await

I want to use the async/await sugar syntax to escape the callback hell and exploit the cleaner procedural syntax as well.

Create `src/modasync.js` file with:

```js
export default () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hey!')
    }, 2000)
  })
}
```

Load it from within `index.js`:

```js
import mod from './modasync.js'

const init = async () => {
  const v = await mod()
  console.log(v)
}

init()
```

Since there is not `async` in the root scope, we need to wrap the main code in an async function.

### ES6 async/await with fetch

I want to do the same when fetching external API. Here an example with **fetch**, put this code in the `index.js`:

```js
const url = 'https://jsonplaceholder.typicode.com/todos/1'

const init = async () => {
  const response = await fetch(url)
  const json = await response.json()
  console.log(json)
}

init()
```

Another example with multiple fetches in sequence, a nice way to avoid the callback hell:

```js
const base = 'https://jsonplaceholder.typicode.com/'
const todos = 'todos'
const posts = 'posts'
const photos = 'photos'

const init = async () => {
  const promises = [fetch(base + todos), fetch(base + posts), fetch(base + photos)]

  const all = await Promise.all(promises)

  all.forEach(async response => {
    const json = await response.json()
    console.log(json)
  })
}

init()
```

### CSS

I want to inject my CSS files into the build.

You can both include a CSS file from within the `template.html` and within js files as well.

From the template, assuming the external file is in `/assets/external.css`:

```html
<head>
  <link rel="stylesheet" type="text/css" href="/assets/external.css" />
</head>
```

From the js file, the CSS needs to be within `src` folder such as `src/style.css` and put this in the `index.js`:

```js
import './style.css'
```

### External CSV/JSON files

I want to load external files at runtime, such as a CSV or a JSON file. In this snippet, let's assume the file is placed in `/assets/data.csv`, then use this code:

```js
;(async () => {
  const response = await fetch('assets/data.csv')
  const data = await response.text()
  console.log(data)
})()
```

There's also the possibility to include (inject) external data files in the build: 

```js
import data1 from './data2.csv'
import data2 from './data.json'

console.log(data1, data2)
```

In this situation you need to put those files within the `src` folder.

### Images

I want to handle images properly using the Webpack way.

Assuming the images placed within `src/images` folder:

```js
import img from './images/1.png'

const myImg = new Image()
myImg.src = img

document.body.appendChild(myImg)
```

The above code works with the following file format:

- png
- jpg
- gif
- svg

## Conclusion

This is meant to be a quick guide to use fast a common webpack configuration. It might be updated eventually.

## What's next: 

I'd like to explore more about using HTML templates and post-processor, mainly for CSS. Stay tuned.