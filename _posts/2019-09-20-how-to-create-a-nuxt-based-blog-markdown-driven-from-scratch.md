---
title: How to create a Nuxt based blog markdown driven from scratch
date: 2019-09-20 5:00:00 +0100
subtitle: 20th September, 2019
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, nuxt, markdown, blog]
---

This is a little guide to set up a minimal [Nuxt.js](https://nuxtjs.org/) based blog with markdown capability.

I've already explored this topic [here](/blog/nuxt-getting-started-with-it/) and [here](/blog/simple-blog-with-nuxt/) and this time I want to explore the same concept using markdown files as the content source.

Nuxt.js is a very good piece of software that provides a very nice development experience without sacrificing top-notch outcomes in terms of performance and reliability as well.

For instance, Nuxt.js allows creating `universal` Vue based websites, meaning you can build a fully static, SEO-ready, websites using all the features of Vue.js in terms of modern user experience.

I've tested it recently with the marketing website of [PRESENTA](https://www.presenta.cc/) and I was impressed by the speed and the comfort during the development as well as the outcome that is super optimized (PageSpeed gave me 92/99 score for mobile/desktop out of 100) and future-proof (the whole website is fully navigable even with javascript turned off!

I've conducted also some stress tests in order to learn whether Nuxt.js can be used to build bigger websites such as products catalogs or news portals. I was able to build a website with more than 1000 markdown files without issues and with a reasonable built time.

This makes Nuxt.js a very good option against another very good static builder that I like a lot, [11ty](https://www.11ty.io/).

## Let's get started from scratch

Here the step by step assuming you've already Node.js+NPM installed, an empty folder on your system and the shell pointing that path.

- Create the package with `npm init`
- Install Nuxt: `npm i nuxt`
- Add this dependency: `npm i frontmatter-markdown-loader`
- Add the dev command in the `scripts` section: `"dev": "nuxt"`
- Create the `nuxt.config.js` file filled with:

```javascript
module.exports = {
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

- Create the `pages` folder
- Create in `pages/` the template file for root pages with this name: `_id.vue` and put this code:

```html
<template>
    <div v-html="html"></div>
</template>

<script>
export default {
    async asyncData({params}) {
        return await import(`content/${params.id}.md`)
    }
}
</script>
```

- Create your first markdown file in the `content/` folder, such as `my-page.md`:

```markdown
# Title

### sub title

Some text

> A quote
```

- Run the development command `npm run dev` and point your browser to `http://localhost:3000/my-page`

You should see the rendered page in beautiful basic HTML.

Now you can create as many markdown files as you want in the `content` root and they will be rendered and properly served according to the browser request.

It's possible also create different templates for different types of content using subfolders as a way to categorize your content.

## What about static pages

So far, the above example is a regular SPA (Single Page Application), not very SEO friendly.

If you want to transform all those markdown files in static HTML files, this way your blog will be SEO ready and backward compatible, here the additional steps to make that happen:

- Add the generate command in package.json scripts section `"generate": "nuxt generate"`
- Install another dependency with `npm i glob`
- Update the `nuxt.config.js` with this code:

```javascript
import glob from 'glob'

let files = glob.sync('**/*.md', { cwd: 'content' })
files = files.map(d => d.substr(0, d.lastIndexOf('.')))

module.exports = {
    generate: {
        routes: files
    },
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

- Now run `npm run generate`

You should get in `dist` folder all the website pages generated ready to be served.

## What about the sitemap?

If you want to give to your blog some chances to get crawled by the search engines, you need to create also a sitemap of all your pages. Here the futher steps:

- Add this dependency: `npm i @nuxtjs/sitemap`
- Update the `nuxt.config.js` with:

```javascript
import glob from 'glob'

let files = glob.sync('**/*.md', { cwd: 'content' })
files = files.map(d => d.substr(0, d.lastIndexOf('.')))

module.exports = {
    modules: [
        '@nuxtjs/sitemap'
    ],
    sitemap: {
        hostname: 'https://www.example.com'
    },
    generate: {
        routes: files
    },
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

- Run again `npm run generate` checking your `dist` folder

Hope this sheds some light on this wonderful library. You can download all the source files from [here](https://github.com/fabiofranchino/nuxt-blog-with-markdown).

Next post will teach you how to list posts and allows navigation between similar posts.