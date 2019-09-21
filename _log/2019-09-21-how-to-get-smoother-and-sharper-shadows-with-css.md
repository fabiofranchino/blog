---
title: How to get smoother & sharper shadows with CSS
date: 2019-09-21 11:40:00 +0100
subtitle: 21st September, 2019
categories: Logs
tags: [log]
---

How to get smoother & sharper shadows with CSS

A [very good tutorials](https://tobiasahlin.com/blog/layered-smooth-box-shadows/) about refining drop-shadow on ui component. A perfect resource to refine the shadows of the [PRESENTA](https://www.presenta.cc/) slide thumbs.

I didn't know about this way of layering box-shadow property in CSS:

```css
box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
            0 2px 2px rgba(0,0,0,0.12), 
            0 4px 4px rgba(0,0,0,0.12), 
            0 8px 8px rgba(0,0,0,0.12);
```

