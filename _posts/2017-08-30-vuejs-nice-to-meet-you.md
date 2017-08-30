---
title: "Vue.js: nice to meet you!"
date: 2017-08-30 14:00:00 +0100
subtitle: 30th August, 2017
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, vue, svg, basic]
---

[Vue.js](https://vuejs.org/) caught my attention since its first public release mainly for its simplicity. Unfortunately, I've never had the opportunity to put my hands on it. Finally, that time has come.

![](../assets/posts/vuejs-nice-to-meet-you/cover.png)

Over the past few years, I had some experience with [Angular 1.x](https://angularjs.org/). I remember I've stumbled upon it back in 2012.  
I remember quite clearly my excitement about how I was able to transform a static web-page in a reactive web-app using a couple of magic custom HTML tags. 

For some reason, I've skipped totally the *React/Angular(2/4) battle* in the last couple of years. There was something that blocked me doing it. I hadn't test them yet.

The mentioned experience with Angular 1.x helped a lot my confidence with Vue.js.  
I've immediately felt at home with it. 

I like Vue.js because it tries to stay lightweight by design, borrowing the best parts of both React and Angular as well.

I like it also because it doesn't try to add new language flavours (*TypeScript* and *JSX*, I'm looking at you!). I used to be careful with opinionated language extensions. I'm happy with my decision to not embrace Sass and CoffeeScript when they still were a thing. I do prefer *W3C* standards.

I've conducted a *getting started* time with the library, trying to discover some peculiarities, learning a couple of useful bits. I'm going to outline this first experience for sharing purpose and future reference.

## Bootstrapping an App

Import the library, use this HTML fragment:

```html
<h1 id="app">{{ message }}</h1>
```

and this js code:

```javascript
new Vue({
    el: '#app',
    data: {message:'Hey'}
})
```

## Components

Creating a reusable component:

```javascript
Vue.component('my-comp', {
    template: '<h1>{{ mydata.message }}</h1>',
    props: ['mydata']
})
```

use it in your document specifying the data bind:

```html
<div id="app">
    <my-comp v-bind:mydata="item"></my-comp>
</div>
```

bootstrap it with this:

```javascript
new Vue({
    el: '#app',
    data: {
        item:{
            message:'my long sentence'
        }
    }
})
```

## Populate a list

Using the directive `v-for`:

```html
<div id="app">
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</div>
```

Vue.js will render it according to the passed array:

```javascript
new Vue({
    el: '#app',
    data: {
        items:['a', 'b', 'c']
    }
})
```

## Two-way binding

The `v-model` directive allows for two-way binding:

```html
<div id="app">
  <textarea v-model="message"></textarea>
  <p>{{ message }}</p>
</div>
```

Now the textarea value will update the `p` tag everytime we type in it:

```javascript
new Vue({
    el: '#app',
    data: {
        message: 'This is a good place to type things.'
    }
})
```

## Conditionals

The `v-if` directive allows for simple conditionals:

```html
<div id="app">
  <ul>
    <li v-for="item in items" v-if="item.show">{{ item.label }}</li>
  </ul>
</div>
```

In this case, a property in data object will be responsible for the list item visibility:

```javascript
new Vue({
    el: '#app',
    data: {
        items:[
            {label:'a', show:true},
            {label:'b', show:true},
            {label:'c', show:false},
            {label:'d', show:true}
        ]
    }
})
```

## Interactivity

The `v-on:click` directive allows to add click event on HTML elements:

```html
<div id="app">
  <ul>
    <li 
        v-for="item in items" 
        v-if="item.show"
        v-on:click="hide">{{ item.label }}</li>
  </ul>
</div>
```

If you want to pass the data object to the event handler function, you need to specify, explicitly, the arguments as the following:

<lineselect lines="4-4" ></lineselect>

```html
<div id="app">
  <ul>
    <li v-for="item in items" 
        v-if="item.show"
        v-on:click="hide(item, $event)">{{ item.label }}</li>
  </ul>
</div>
```

The javascript part looks like:

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        items:[
            {label:'a', show:true},
            {label:'b', show:true},
            {label:'c', show:false},
            {label:'d', show:true}
        ]
    },
    methods:{
        hide: function(item, event){
            item.show = false
        }
    }
})
```

## From App to Component

We can transform the above code as reusable component with:

```javascript
Vue.component('bars', {
    template: '<ul><li v-for="item in items" v-if="item.show" v-on:click="hide(item, $event)">{{item.label}}</li></ul>',
    props: ['items'],
    methods:{
        hide: function(item, event){
            item.show = false
        }
    }
})
```

and using the new tag in our document:

```html
<div id="app">
  <list class="foo" v-bind:items="mydata"></list>
</div>
```

and bootstrapping it with this code:

```javascript
new Vue({
    el: '#app',
    data: {
        mydata:[
            {label:'a', show:true},
            {label:'b', show:true},
            {label:'c', show:false},
            {label:'d', show:true}
        ]
    }
})
```

## SVG is markup as well

We can use Vue.js with the SVG tag just like any other HTML tag. Suppose the following custom tag:

```html
<div id="app">
  <mychart v-bind:dataset="mydata"></mychart>
</div>
```

and the component definition:

```javascript
Vue.component('mysvg', {
    template: '<svg><rect v-for="(item, index) in dataset" width="20" :x="index*21" :height="item.v" :y="50-item.v"></rect></svg>',
    props: ['dataset']
})
```

and the bootstrap code to get a little chart driven by Vue.js:

```javascript
new Vue({
    el: '#app',
    data: {
        mydata: [
            {v:20},
            {v:40},
            {v:10},
            {v:26}
        ]
    }
})
```

Note how to compute an attribute value with an expression. We need to use this special notation, `:x` instead the regular `x` 

Now, editing the array (adding, deleting, updating an object or property) will be reflected in the view automatically thanks to the reactive system of Vue.js.

## Conclusion

Not a true conclusion. I really hope to go deeper with Vue.js. I like it.

