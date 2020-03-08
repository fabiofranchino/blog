---
title: CSS line clamp
date: 2020-03-08 15:20:00 +0100
subtitle: 8th March, 2020
categories: Logs
tags: [log]
---

Today I've discovered this little CSS gem that allows very easily to truncate a paragraph with ellipsis according with the desired number of lines.

It's unofficial but well [supported](https://caniuse.com/#search=line-clamp), thus, use it wisely.

The relevan part are in this code:

```html
<p>
  Some text
</p>
```

```css
p{
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

A reactive demo [here](https://observablehq.com/@abusedmedia/css-line-clamp)