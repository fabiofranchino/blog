---
title: Setting a minimun default height to Quill text area
date: 2019-02-08 13:10:00 +0100
subtitle: 8th February, 2019
categories: Logs
tags: [til]
---

If you are planning to create a tool that includes a WYSIWYG text editor, [Quill](https://quilljs.com) is great for that.

If you need to define a default height of the text area, since it doesn't come with that option, just use this CSS rule:

```css
.ql-editor{
    min-height:200px;
}
```

The component will adapt further if it needs more space for its content.

A kind of TIL (Today I Learned).