---
title: Match an email with RegEx
date: 2019-07-07 14:41:00 +0100
subtitle: 7th July, 2019
categories: Logs
tags: [log]
---

Here the pattern I use to validate an email in a text input field:

```js
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g
```

Suppose to have this little component:

```html
<input type="email" value="" id="email" />
```

and the javscript for the validation:

```js
document.querySelector('#email').onblur = () => {

  var val = document.querySelector('#email').value
  var reg = val.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g)
  if(reg){
    console.log("it's valid, proceed")
  }else{
    console.log("nope, not valid")
  }

}
```

Here a [pen](https://codepen.io/abusedmedia/pen/OeBpMM?editors=1011).

