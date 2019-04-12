---
title: Develop a JS lib these days
date: 2019-04-12 10:00:00 +0100
subtitle: 12th April, 2019
style: blue
categories: Tutorials
tags: [review, js, es6, library]
---

I made several attempts in the past trying to develop javascript libraries. Recently, I wanted to include in my [current side-project](https://www.presenta.cc) a [lib](/blog/might-become-a-lib/) I built a while ago.

I've realized, quite immediately, that my little piece of code was not compatible anymore with the modern way of building web-app (read: import in a ES6 or Vue-cli projects). I succeed to include it with some hacks but, most importantly, I've realized that I should update my knowledge in the field.

The time has come and here my first attempt at grasping the whole stuff.

## The goal

Here my goal: I want to write a js library the modern way, that means:

\- write it in ES6 (or other additional flavors)

\- use the module loader (import/export) for peace of mind

\- build a package that is compatible both in the browser and node.js

\- have a developer-friendly setup (watcher and reloader during development session)

## The Proof-of-concept

[Here the repo](https://github.com/abusedmedia/how-to-dev-a-js-lib) with my P-O-C which I'm quite satisfied with.

[Rollup](https://rollupjs.org) is the bundler that does almost all of the hard work, [Babel](https://babeljs.io/) to make it compatible with ES5.

So far, so good since the same bundle can be used in the browser, such as:

```html
<script src="mylib.js"></script>
<script>
  mylib.mod1.method()
</script>
```

and in Node.js with:

```javascript
var { mod1 } = require('mylib')
mod1.method()
```

All that with a nice and modular development experience.

