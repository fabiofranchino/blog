---
title: Replace not found image in Vue
date: 2019-07-03 04:54:00 +0100
subtitle: 3rd July, 2019
categories: Logs
tags: [log]
---

If you want to provide to the user a nicer image replacement than the browser not-found icon in Vue.js, here the way to go:

Assume you have this tag in yout component template:

```html
<img :src="getImagePath" @error="fallback" />
```

Now you can exploit the `error` trigger to change a flag in order to provide a different path:

```javascript
data(){
  	return{
      onErr:false
    }
},
methods:{
	fallback () {
    this.onErr = true
  },
  getImagePath(){
    return (this.onErr) ? 'placeholder_path' : 'some_image_path'
  }
}
```

The downside of this method is that you see a little image swap during js evaluation. This can be mitigated using CSS hiding the `img` tag if it has errors.