---
title: Simple blog with Nuxt
date: 2017-09-20 14:00:00 +0100
subtitle: 20th September, 2017
style: blue
cover: cover.jpg
categories: Tutorials
tags: [tutorial, vue, nuxt, spa, static, site, generator]
---

Following [my enthusiasm](/blog/nuxt-getting-started-with-it/) about [Nuxt.js](https://nuxtjs.org/) and [Vue.js](https://vuejs.org/), here another step.

In this post, I'm going to outline the additional steps to build a bare bones blog using Nuxt.

This is a very basic blog with an `index` template, a sidebar and a `post` template using a json array as the data source.

<!-- main_ad -->

The notable differences from the previous tutorial are essentially two.

## Using external data

The `index` page is a template that will be populated by means of an array of objects that comes from an ajax request, and this is the Nuxt way to do that:

```html
{% raw %}<template>
  <article>
    <h1>Index</h1>
    <div class="grid">
      <ul>
        <li v-for="article in articles" class="item">
          <nuxt-link :to="'/article/' + article.id">{{ article.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </article>
</template>


<script>
import axios from 'axios'

export default {
  title: 'Hey there',
  async asyncData () {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return {articles:data}
  }
}

</script>{% endraw %}
```

You can see the template will iterate over the `article` array to build the titles list.

## Dynamic page

So far, every page we want to publish needs to be created as `.vue` component, manually, in `pages` folder. In our case, we need to deal with an array of objects where each object should become an article. Nuxt provides a way to setup a `.vue` component that acts as a `master` to generate multiple pages out of it.

Inside the `pages` folder, let's create another folder named `article` (or choose your own) and within it put a `.vue` component named `_id.vue` with the following source:

```html
{% raw %}<template>
  <article>
    <h1>{{title}}</h1>
    <p>{{body}}</p>
    <nuxt-link :to="'/'">Back</nuxt-link>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({params, error}){
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${+params.id}`)
    return data
  }
}

</script>{% endraw %}
```

## Test the shit

Using the usual `npm run dev` command, you can check in-browser your progress. 

To generate the pages we need to run the command `npm run generate`. Before to run it we need to add the last detail in order to make it work properly. Nuxt needs a way to know which are the dynamic pages in order to create static files for them, also providing a way to define the filename for each.

In the `nuxt.config.js` file there's the `generate` property that serves for that purpose:

```javascript
generate: {
    routes () {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          var rts = []
          res.data.forEach((d) => {
            rts.push('/article/' + d.id)
          })
          return rts
        })
    }
}
```

In this case, the `id` will be used for the filename but you are free to implement different logic.

You can [check the source](https://github.com/fabiofranchino/simple-blog-with-vuex) on Github and [navigate the prototype](https://fabiofranchino.com/simple-blog-with-nuxt/) as well.

## Conclusion

Keep in mind that this is a **SPA** (Single Page Application) with **SEO** (Search Engine Optimization) capability. Isn't that awesome?

Furthermore, this is a **POC** (Proof Of Concept) just to learn Nuxt.js.  
There is also a Nuxt [blog module](https://github.com/nuxt-community/blog-module) for those who want something more refined.

Cheers.
