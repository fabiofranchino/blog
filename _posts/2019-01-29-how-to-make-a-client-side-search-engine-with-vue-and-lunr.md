---
title: How to make a client-side search engine with Vue.js and Lunr.js
date: 2019-01-29 13:00:00 +0100
subtitle: 29th Jannuary, 2019
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, vue, lunr, search]
---

This is a little tutorial about making a search/filter [Vue.js](https://www.vuejs.org/) component using the powerful [Lunr.js](https://lunrjs.com/) library.

**A little disclaimer:** I've purposely avoided any CSS styles also keeping minimal the HTML markup, using Vue without the CLI, to focus only on the logic and integration part for simplicity. I thought Vue.js learners may find this way useful.

## A little Vue.js app

Suppose to have a little component that loads a JSON file and creates a items list based on a given array, such as:

```html
Vue.component('mylist', {
  template:`<ul>
    <li v-for="item in list" :key="item.id">{{item.name}}</li>
</ul>`,
  props:['list']
})
```

Here the working example:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="abusedmedia" data-slug-hash="wNzBQY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="vue lunr search 1">
  <span>See the Pen <a href="https://codepen.io/abusedmedia/pen/wNzBQY/">
  vue lunr search 1</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Then, we want to integrate a search/filter capability with an input text field:

```html
Vue.component('mysearchbtn', {
  template:`<div>
    <input type="text" placeholder="type to search"
      v-model="search"
      @input="$emit('update:search', $event.target.value)" />
</div>`,
  props:['search']
})
```

and here the updated example:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="abusedmedia" data-slug-hash="ErgjYN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="vue lunr search 2">
  <span>See the Pen <a href="https://codepen.io/abusedmedia/pen/ErgjYN/">
  vue lunr search 2</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Now we need to make both the components working together, let's say, when I type into the text field, the list should update according to the search pattern.

## Welcome Lunr.js

Instead of reinventing the wheel by implementing a search algorithm, I'm going to exploit [Lunr](https://lunrjs.com/), a very powerful and configurable library that make complex search pretty `neat`.

Just to give a taste, you can search using some well-known patterns such as:

- using the wildcard, i.e. `Pete*` to find anything that begins with `pete`
- searching in a specific field object, i.e. `email:*@gmail.com` to find in `email` field the string that ends with `@gmail.com`
- using operators to include or exclude specific keywords, i.e. `me +you -her` 
- Lunr handles plurals and articles for us as well
- bonus tip, each result item comes with a score based on search relevance as well as additional useful information related

## Setting Lunr up 

Lurn requires the creation of an **index** based on a given dataset, such as:

```js
var searchIndex = lunr(function () {
  this.ref('id')
  this.field('name')
  this.field('body')
  this.field('email')

  documents.forEach(doc => {
    this.add(doc)
  })
})
```

An important thing to consider about Lunr is [the result array](https://lunrjs.com/guides/core_concepts.html#search-results) that is not a filtered version of the original dataset but a new and different array of objects containing specific search result properties, I guess both for performance reasons and to provide additional search information without manipulating the original array.

That means we need to find a way to filter the original array based on the produced Lunr array. This is the function I use; basically, I set a new array on every search keyword change including only the items present in the search result based on the reference field (the `id` in this case):

```js
this.list = []
this.resuls.forEach(d => {
    this.original.forEach(p => {
        if(d.ref == p.id) this.list.push(p)
    })
})
```

I'm still wondering whether that is the best way to update the list from a performance perspective in Vue.js, though.

Now, the final examples looks like this:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="abusedmedia" data-slug-hash="GzjJEP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="vue lunr search 3">
  <span>See the Pen <a href="https://codepen.io/abusedmedia/pen/GzjJEP/">
  vue lunr search 3</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Hope this might be helpful to someone. I made this to integrate this functionality on a little tool I'm working on, [Presenta](https://www.presenta.cc/).

Have a nice day!