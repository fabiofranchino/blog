---
title: Media Query snippet for quick recall
date: 2020-07-05 05:12:00 +0100
subtitle: 5th July, 2020
categories: Tips
---

I've always check in previous projects the proper way to write a Media Query for mobile-first project.

I can't memorize it, don't know why.

So, here the snippet, a rule that apply by default (mobile-first) and the media query that override for tablet/desktop viewport:

```css
.wrapper{
  display: flex;
  flex-direction: column;
}

@media screen and (min-width:420px) {
  .wrapper{
    flex-direction: row;
  }
}
```

