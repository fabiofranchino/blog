---
title: Select All text
date: 2019-07-02 12:22:00 +0100
subtitle: 2nd July, 2019
categories: Logs
tags: [log]
---

Some times you need to help the user by selecting a chunk of text for her.

There are two main technical possibilities, depending of the HTML element you want to use.

If the text you want to select automatically on user click is wrapped in any regular HTML element, such as a `p` tag, you can simply use CSS:

```html
<p>Some text</p>

<style>

p{
  user-select:all;
}

</style>
```

That's it. With the above code, if the user clicks on the `p`, the text will be automatically selected in order to be ready for copying purposes. It's going to work for any situation except for one case.

If you want to provide the same functionality using `input` elements, this is a quick solution:

```html
<input value="Some text" onClick="this.setSelectionRange(0, this.value.length)"/>
```

In other words, you need to rely on javascript, though.
