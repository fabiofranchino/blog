---
title: How to import the SVGRenderer of Tree
date: 2019-11-18 08:21:00 +0100
subtitle: 18th November, 2019
categories: Logs
tags: [log]
---

Importing three.js in ES6 is something like:

```js
import * as THREE from 'three'
```

But if you want to import some external resources, such as the SVGRenderer, you have to rely with the full local path to that module:

```js
import { SVGRenderer } from '@/../node_modules/three/examples/jsm/renderers/SVGRenderer.js'
```

Now you can render your 3D scene in full SVG!