---
title: Making contenteditable in Vue from scratch
date: 2018-12-23 10:00:00 +0100
subtitle: 23th December, 2018
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, vue, html]
---

The little `contenteditable` attribute is one of the pillars of the modern web experience today, the ability to edit text in place and not by means of specific areas (text fields and text area, for instance).

By adding it to any HTML tag allows to **automagically** transform any text element in an editable one.

## Contenteditable in a Vue.js app

Here the secret:

```html
<p contenteditable>
    This is now a live editable text
</p>
```

This works out of the box in any modern browser. It doesn't in a Vue.js app, though. Vue updates DOM elements according to some data using the data-binding mechanism, thus, we need to sync the data and the editable element in some way.

Here a basic Vue app with a `contenteditable` element:

```html
<div id="app">

    <div contenteditable
      v-text="txt"
      @blur="onEdit"></div>
    
 </div>

<script>
 new Vue({
     el: '#app',
     data: {
         txt:'Edit me'
     },
     methods:{
         onEdit(evt){
             var src = evt.target.innerText
             this.txt = src
         }
     }
 })
</script>
```

The `@blur` event updates the data using the tag content, and it happens when the user click outside the editable element.

We can add the ability to update the data using also the `@keypress` event as well, which follow a typical UX pattern, the ENTER key is meant to confirm the editing:

```html
<div id="app">

    <div contenteditable
      class="editme" 
      v-text="txt"
      @blur="onEdit"
      @keydown.enter="endEdit"></div>
    
 </div>

<script>
 new Vue({
     el: '#app',
     data: {
         txt:'Edit me'
     },
     methods:{
         onEdit(evt){
             var src = evt.target.innerText
             this.txt = src
         },
         endEdit(){
         	this.$el.querySelector('.editme').blur()
         }
     }
 })
</script>
```

The following a working version to demonstrate the data-binding when editing a regular HTML tag:

<p data-height="265" data-theme-id="0" data-slug-hash="gZWmLz" data-default-tab="result" data-user="abusedmedia" data-pen-title="ContentEditable in Vue #1" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/gZWmLz/">ContentEditable in Vue #1</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## A variant behavior

The previous example updates the data on **blur** or **keypress Enter** event. If you want to update it also **as-you-type** we can exploit an additional event type, the **input** event, which calls the update function on each text change. The previous example has been modified a bit to get the desired behavior dealing with potential conflicts with the internal data-binding of Vue:

<p data-height="265" data-theme-id="0" data-slug-hash="aPWJVp" data-default-tab="result" data-user="abusedmedia" data-pen-title="ContentEditable in Vue #2" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/aPWJVp/">ContentEditable in Vue #2</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

## Takeaways

While it's not a good idea to replace text fields with the `contenteditable` attribute everywhere, there are some specific use case where the user experience really get benefits out of this technique .

If you plan to use it somewhere, remember to let the user know what is live-editable because it's not something you can give for granted.