---
title: Invoke the upload dialog from Vue.js component
date: 2019-10-25 07:00:00 +0100
subtitle: 25th October, 2019
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, vue,  input, upload, component]
---

In my [previous tutorial](/blog/build-drag-drop-image-component-vue) I've outlined how to build a Vue.js component to allow users to drag&drop files on the browser window.

Now, I want to add a little feature more to those components, the possibility to invoke the upload dialog box by clicking or tapping some link.

## The input selector

There is only one way to show the upload dialog in the browser. We need an `<input type="file" />` tag which produces a default form button, not really sexy from UI point of view.

But we can hide it and use a placeholder instead, that can be styled as we prefer with CSS:

```html
<label for="uploadmyfile">
  <p>Open the Upload dialog</p>
</label>
<input type="file" id="uploadmyfile" />

<style>
  #uploadmyfile{
    display:none;
  }
  p{
    color:red;
  }
</style>
```

## The JS add-on

The input selector is responsible to open the dialog window and call a function once the user choose something. Here a minimal component in Vue.js that does the job:

```html
<template>
    <div>
        <label for="uploadmyfile">
            <p>Open the Upload dialog</p>
        </label>
        <input type="file" id="uploadmyfile" @change="requestUploadFile" />
    </div>
</template>


<script>
export default {
    methods:{
        requestUploadFile(){
            var src = this.$el.querySelector('#uploadmyfile')
            console.log(src.files)
        }
    }
}
</script>
```

The `requestUploadFile` method is called once the users choose some files from their computer. The function then can read the `input` element to get a `FileList` object containing the list of `File` choosen by the users.

In the previous components there was already a method responsible to read the images from a `FileList` object. We just need to integrate the two together.

## The complete component

Here the result combining both the drag&drop feature with the upload dialog box function:

<iframe src="https://vue-drop-image-and-preview-2--abusedmedia.repl.co" height="400"></iframe>

You can review the complete source code from its repository.