---
title: Using Nuxt and Normalize-css to generate files
date: 2019-04-09 14:40:00 +0100
subtitle: 9th April, 2019
categories: Logs
tags: [log]
---

Using Nuxt and Normalize-css to generate files

Today I've learned that if you want to use Nuxt together with Normalize-css library in this way in a Vue component or page:

```javascript
import 'normalize-css'
```

and want to use the static builder to generate the pre-rendered files, you're going  to get this error:

```javascript
ReferenceError: document is not defined
```

If you try to search about, you may find a lot of issues regarding that error because it's typical  when dealing with the Nuxt builder and some client-side library that cannot be executed because the `document` is undefined in the server context.

That's ok, thus the question now is why `normalize-css`, which is a CSS library, would (and possibly how would) require the `document`?

Here the WHY: importing as a js lib a `insert-css` dependency is also imported and executed, and since it tries to inject the `normalize-css` code in the `head` using javascript, Nuxt builder throw the error.

The solution? Import the CSS file instead the module, such as:

```js
import '~/node_modules/normalize-css/normalize.css'
```

Now everything get back to work as expected.

