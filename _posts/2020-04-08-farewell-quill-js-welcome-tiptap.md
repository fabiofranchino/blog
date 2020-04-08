---
title: Farewell Quill.js, Welcome TipTap!
date: 2020-04-08 07:00:00 +0100
subtitle: 8th April, 2020
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, quill, tiptap, presenta]
---

[PRESENTA](https://www.presenta.cc/) internal text editor was implemented using [Quill.js library](https://quilljs.com/).

At that time, it was, by far, the most interesting option, with a generic internal document format, a plugin system and a good documentation.

[PRESENTA](https://www.presenta.cc/) text editor is not based on Quill.js anymore. Right now, it uses the wonderful [TipTap](https://tiptap.scrumpy.io/), based on [ProseMirror](https://prosemirror.net/).

The reasons why I've migrated to another option were several, here the most importants:

- Quill.js customization is far from perfection, to say the least.
- Overriding some internal style defaults is not clean and easy, leading to a lot of hacks.
- The complete [lack of support for the shift-enter](https://github.com/quilljs/quill/issues/252), the soft new line (without alternatives, even hackish) brought me to the hard decision.

Of course, I don't want to blame Quill.js. It's just a matter of fact. I've discovered a better option and I decide to spend time for the migration.

I couldn't be happier of the choice!

I've migrated the component in half day including all the custom features I had to implement as TipTap plugins, not to mentioning the way more better experience of the editor since I'm able to customize, so far, **everything**.

If you need a text editor for Vue.js, truly fully costomizable, I can stress enough: [TipTap](https://tiptap.scrumpy.io/)!

## What I've learned

The experience with Quill.js, of course, made me learn tons of stuff, Quill-related.

I want to say goodbye to Quill.js leaving here a couple of tips that might be useful to someone else.

First, here a very minimal Vue.js component that initialize Quill.js (with default setting) and handles the common interaction between Quill and Vue:

<iframe height="265" style="width: 100%;" scrolling="no" title="Quill and Vue" src="https://codepen.io/abusedmedia/embed/qBOWPza?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/abusedmedia/pen/qBOWPza'>Quill and Vue</a> by Fabio Franchino
  (<a href='https://codepen.io/abusedmedia'>@abusedmedia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Then, if you need to introduce a custom tag in Quill.js, here the sample code, found it in tons of online searches.

Here the code to allow the `mark` HTML tag:

```javascript
const Inline = Quill.import('blots/inline')

class MarkBlot extends Inline { }
MarkBlot.blotName = 'mark'
MarkBlot.tagName = 'mark'
Quill.register(MarkBlot)
```

Remember to make it available in the Quill.js options object:

```javascript
var options = {
  formats: [
    'bold',
    ...
    'mark'
  ]...
```

And here the way to add a custom icon to the newly introduced tag:

```javascript
var icons = Quill.import('ui/icons')

icons.mark = '<svg viewBox="0 0 8.3 8.1"><path d="..."/></svg>'
```

That's all, not much I know.