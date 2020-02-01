---
title: Add programmatically a draggable element in VueDraggable with Sortable
date: 2020-02-01 07:37:00 +0100
subtitle: 1st February, 2020
categories: Logs
tags: [log]
---

After spending a good amount on this morning I've found a way to add programmatically, meaning using js and not the mouse, one or more HTML elements in the draggable list when using the VueDraggable plugin in a Vue project.

I've tried different routes, trying sending custom MouseEvent and PointerEvent without any luck.

Then, I've found that the Sortable.js MultiDrag plugin has a couple of helper methods you can see at the bottom of its [README](https://github.com/SortableJS/Sortable/tree/master/plugins/MultiDrag), more specifically this one:

```js
Sortable.utils.select(HTMLElement)
```

It's supposed to do what I precisely need: adding one or more elements in the draggable list without passing through the native mouse/touch events.

Now, the problem is: how to access that methods from a Vue.js project?

By looking at the source code of VueDraggable [fork](https://github.com/divinespear/Vue.Draggable) I'm using in this example that include the plugin, **MultiDrag is singleton**, thus, you can import the module and use its static methods this way:

```js
import { MultiDrag } from "sortablejs"
MultiDrag.singleton.utils.select(el)
```

Tested and added on my personal project [PRESENTA](https://www.presenta.cc/).