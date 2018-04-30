---
title: Scroll indicator with Vue.js
date: 2018-04-30 14:00:00 +0100
subtitle: 30th April, 2018
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, vue, js, scroll, vanilla]
---

I'm having fun with [Vue.js](https://vuejs.org/) lately. 

I believe (and I'm not the only one) that its success is due to its multiple and progressive possibilities to adopt it, a very different strategy compared with its direct main competitors.

To prove its benefits further to myself, I've decided to convert a [previous example](/blog/play-progress-scroll-indicator-code/) I did with jQuery some time ago. That also means I'd had to get rid of jQuery utilities in favor of pure vanilla javascript functions, not rocket science here but I've still learned some bits out of it.

## The markup

The greatest benefit of frameworks such as Vue, React and Angular is that they allow thinking a project as a collection of components instead of a whole monolith. Once you really begin to think that way, the whole process of a project implementation becomes much more easy to deal with.

So, I've envisioned and written down my ideal markup for this project, something like:

```html
<div id="app">
  <indicator></indicator>
  <txtdummy></txtdummy>
</div>
```

Two components, the former would be the progress indicator, the latter a container with dummy text.

## Bootstrap the app

This is the usual way to bootstrap a Vue app:

```js
new Vue({
  el:'#app'
})
```

Next, we need to create the components, to put before the bootstrap instantiation.

## The scroll component

I've ported the previous jQuery based code into vanilla javascript and put it into this component. I've spent a bit of time to figure out why `document.body.clientHeight` didn't matches the (apparently) equivalent `$(document).height()`.   
After a bit of research, I've understand that the right property to get the proper calculation was `document.documentElement.scrollHeight`. Good to know.

```js
Vue.component('indicator', {
  template:'<div id="indicator"></div>',
  mounted:function(){
    var vm = this
    window.addEventListener('scroll', function(e){
      var scrollPos = window.scrollY
      var winHeight = window.innerHeight
      var docHeight = document.documentElement.scrollHeight
      var perc = 100 * scrollPos / (docHeight - winHeight)
      vm.$el.style.width = perc + '%'
    })
  }
})
```

## The dummy text component

Since I wanted to keep my markup clean and short, I've decided to create a small component that simply loads some dummy text from somewhere and populate the html tag for me:

```js
Vue.component('txtdummy', {
  template: '<h1>{{str}}</h1>',
  data:function(){
    return{
      str: ''          
    }
  },
  mounted:function(){
    var url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text'

    var vm = this
    axios.get(url)
      .then(function(d){
        vm.str = d.data
      })
      .catch(function(e){
        console.log(e)
      })

  }
})
```

As you can see, I've used an additional library to make a request, [Axios](https://github.com/axios/axios) for instance, because Vue doesn't come with this capability.

So far, so good, hopefully more to come.

## Demo time

Here the Codepen with the above working code:

<p data-height="265" data-theme-id="light" data-slug-hash="yjMeGy" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="Scoll Indicator with Vue (revisited)" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/yjMeGy/">Scoll Indicator with Vue (revisited)</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>