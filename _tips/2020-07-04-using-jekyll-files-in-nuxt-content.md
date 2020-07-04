---
title: Using Jekyll files in Nuxt Content
date: 2020-07-04 18:42:00 +0100
subtitle: 4th July, 2020
categories: Tips
---

I'm planning to convert my Jekyll based blog to Nuxt using the fantastic `content` [plugin](https://content.nuxtjs.org/).

Jekyll puts, by convention, the post date in the file name, such as:

```shell
2020-12-12-my-blog-post.md
```

and automatically converts the slug removing that date in order to get:

```shell
/my-blog-post/
```

Nuxt doesn't have that convention, therefore, if I would to use my Jekyll files without renaming them, I need to performe some data transformation during the build step.

I could rename them manually but I like to preserve the date in the file name because it keep them sorted in my file system.

Luckly, Nuxt Content has an [Hook](https://content.nuxtjs.org/advanced) system for that kind of task. Here the code I've put in my `nuxt.config.js` to make the transformation:

```js
hooks: {
  'content:file:beforeInsert': (document) => {
    const reg = /\d{4}-\d{2}-\d{2}/
    const mtc = reg.exec(document.slug)
    if (mtc) {
      document.slug = document.slug.substr(11)
      document.path = document.dir + '/' + document.slug
    }
  }
}
```

Since the markdown files are transformed into a JSON structure, we can transform them without worry about the markdown files completely.

Pretty neat!