---
title: How to build a Drag&Drop Images Vue.js component from scratch
date: 2019-10-24 07:00:00 +0100
subtitle: 24th October, 2019
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, vue,  drag&drop, component]
---

In this post I'm going to dive a bit creating a Vue.js component from scratch using Vue CLI and ES6 to allow users drag&drop images in the browser.

The final implementation is not meant to be "ready to be drop" components for your app. They are better a starting point to be include in your app by adding further logics required by your product.

![](/blog/assets/posts/build-drag-drop-image-component-vue/cover.gif)

The component can be used in any Vue app such this one:

```html
<template>
  <div id="app">
      <DropAnImage />
  </div>
</template>

<script>
import DropAnImage from './components/DropAnImage.vue'

export default {
  name: 'app',
  components: {
    DropAnImage
  }
}
</script>


<style>
html, body, #app{
  width:100%;
  height:100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
</style>
```

And here up and running, if you want to drop something:

<iframe height="400" src="https://vue-drop-image-and-preview.abusedmedia.repl.co/"></iframe>

Just to be clear, the above app is not uploading anything, all happens client-side only.

## Build the component

There are two relevant parts to make it work properly:

- the native drag events
- the FileReader object to read on-the-fly dropped elements

## The native events

The browser allows to listen for `dragover`, `dragleave` and `drop` events to performe the interactive part of the component.

In Vue.js we can set those event in the template:

```html
<template>
  <div class="drop" 
    @dragover.prevent="dragOver" 
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop($event)">

  </div>
</template>
```

With this events you can define some logic to display relevant UI information for the user. The `drop` event is the one that bring to the next part.

## The FileReader

The `FileReader` allows to read the content of a file attached to an event. It requires a `File` object to work properly.

This is the typical implementation:

```js
var reader = new FileReader()
reader.onload = f => {
  let src = f.target.result
}
reader.readAsDataURL(file)
```

and here used in the callback after a drop event:

```js
drop(e){
      let files = e.dataTransfer.files

      let file = files[0]

      let reader = new FileReader()
      reader.onload = f => {
        // f.target.result contains the base64 encoding of the image
        let src = f.target.result
      }
      reader.readAsDataURL(file)
}
```

The above snippet is simplified on purpose to show the relevant part. The fully implemented

## Conclusion

You can check the [repository](https://github.com/fabiofranchino/vue-drop-image-and-preview) if you want to start from the source. The components are not meant to be a drop-in component but rather a starting point to extend them to something more meaningful in your app. There are two flavuors of the same implementation:

- `DropAnImage` to allow uploading only one image
- `DropImages` allows many images to be dropped