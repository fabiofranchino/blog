---
title: Using dynamic path in Vue CLI
date: 2019-07-18 13:17:00 +0100
subtitle: 18th July, 2019
categories: Logs
tags: [log]
---

If you want to pass a dynamic path to an `img` tag using the CLI of Vue (meaning Webpack), here the little gem:

```html
<img :src="require(`@/assets/${myVarOrMethod}`)" />
```

Happy Vue diving