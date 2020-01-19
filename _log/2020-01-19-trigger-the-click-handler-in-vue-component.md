---
title: Trigger the click handler in Vue component
date: 2020-01-19 17:52:00 +0100
subtitle: 19th January, 2020
categories: Logs
tags: [log]
---

In Vue.js you can create components to wrap HTML elements. No surprise here.

Within any component you can add `@click` directive to HTML elements, such as:

```html
<template>
  <div>
    <div @click="doSomething">
      Some text
    </div>
  </div>
</template>
```

That's basic stuff and it just work as expected.

If, instead, you add a `@click` statement to a custom Vue component, such as:

```html
<template>
  <div>
    <MyComp @click="doSomething" />
  </div>
</template>
```

it is not going to work, but, don't panic, it's easy to fix with:

```html
<template>
  <div>
    <MyComp @click.native="doSomething" />
  </div>
</template>
```

where the `.native` directive make the custom component reactive to the native events as well.

