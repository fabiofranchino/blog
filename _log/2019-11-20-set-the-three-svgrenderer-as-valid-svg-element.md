---
title: Set the THREE SVGRenderer as valid SVG element
date: 2019-11-20 11:59:00 +0100
subtitle: 20th November, 2019
categories: Logs
tags: [log]
---

If you want to set as valid the SVG used by THREE.js (in case you use the SVGRenderer), here the little snippet with a basic THREE.js scene:

```java
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100)
const renderer = new SVGRenderer()
renderer.setSize(300,200)

// this is the line that makes valid the SVG element
renderer.domElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

el.appendChild(renderer.domElement)
```

