---
title: Vue directives in ES6
date: 2018-08-09 14:00:00 +0100
subtitle: 9th August, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, vue, es6, directive]
---

I've just started studying seriously the `vue-cli` ([now in version 3](https://cli.vuejs.org/)) because, among all the awesomeness of the framework, it allows to write in pure ES6 javascript, which is, you know, somewhat the future.

I've [already explored](/blog/tag/vue) Vue in previous posts but I haven't written something about the `directive` feature in general.

In Vue world, there are two main ways to create bricks of your app, that are by:

- components
- directives

A component is a small piece of interface with some logic and style. A directive instead, decorate, add or modify an existing component or a simple DOM element with futher functionality, style or behaviour.

## A Vue directive in ES5

In plain ES5 javascript, creating a Vue directive is something like:

```javascript
Vue.directive('make-it-red', {
    inserted: function(el){
        el.style.color = 'red'
    }
})
```

and here how to use it in your document (Codepen [here](https://codepen.io/abusedmedia/pen/wxRgLj?editors=0010)):

```html
<p v-make-it-red>
    My Text
</p>
```

Now, you can see the directive has been registered in the global Vue instance, therefore, I can reuse the same functionality in any tag I want to color by red.

## But global is evil

One of the things ES6 is trying to solve in the browser world is the global scope. When you import Vue in your browser, its instance is available in the `window` scope. Likewise, the directive I created before is available in the instance of Vue globally. This is not bad until the complexity of the app reaches some level and weird things begin to arise.

ES6 allows working without polluting the global scope. By now, not natively supported but it will in the future. Thanks to some smart tools such as `vue-cli` we can use it right now.

## A Vue directive in ES6

Let's see the same above example using ES6 and the `vue-cli.` Suppose to save it as `makeItRedDirective.js` file:

```javascript
export default{
    inserted (el) {
        el.style.color = 'red'
    }
}
```

You might notice the missing global declaration of the directive. Right now it is just a  function. In order to use it you need to import from within another file, a `.vue` file for instance:

```html
<template>
    <div>
        <p v-my-dir>My Text</p>
    </div>
</template>


<script>
    import myDir from './makeItRedDirective.js'

    export default{
        directives:{
            'my-dir': myDir
        }
    }
</script>
```

Do you spot the difference? In ES6 you can import a directive giving a complete custom name to it. Right now the `make-it-red` directive can be renamed, giving much more responsibility to the developer (what about naming `make-it-blue` the same directive?)

If you want to make it global in ES6 you can do it modifying the directive like this:

```javascript
import Vue from 'vue'

export default Vue.directive('make-it-red', {
    inserted (el) {
        el.style.color = 'red'
    }
}
```

This way you just need to import the directive without explicitly declare it in the component:

```html
<template>
    <div>
        <p v-my-dir>My Text</p>
    </div>
</template>


<script>
    import myDir from './makeItRedDirective.js'

    export default{
    }
</script>
```

Hope this help new Vue learners.