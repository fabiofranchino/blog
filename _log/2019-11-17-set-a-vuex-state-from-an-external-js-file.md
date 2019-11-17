---
title: Set a Vuex state from an external js file
date: 2019-11-17 06:37:00 +0100
subtitle: 17th November, 2019
categories: Logs
tags: [log]
---

If you need to make this kind of task for some weird reason, here an example on how I make it to work.

In the `main.js` file of a Vue project, where you usually instantiate Vuex and Router, you can access any Vuex property using its own methods, such as:

```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import somedata from 'myexternaljsfile.js'

store.commit('setMyData', somedata)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

```

I think it's possible the same in any other `.vue` files but I didn't try.