---
title: Deploy a back-end and front-end app using Heroku and Netlify
date: 2018-09-27 14:00:00 +0100
subtitle: 27th September, 2018
style: blue
cover: cover.jpg
categories: Tutorials
tags: [tutorial, node, vue, heroku, netlify]
---

I'm working on a side project that needs to be deployed online. I made some research and test, thus, here some documentation that might be useful to someone.

In this POC I wanted to deploy a **minimal modern webapp** (*backend* and *frontend*) on two different platforms, in order to get the most out of them.

Nowadays we like to make webapp as **SPA** (Single Page Application) that consumes data by means of **API** (Application Program Interface). This is a good way to split the complexity and responsibility in different codebases.

While [Heroku](https://heroku.com) is a very good option to deploy an api-based backend app in seconds, [Netlify](https://www.netlify.com/) is a much better solution for frontend app (build system, CDN and more).

Here the steps and source code to start from zero to a minimal remote and working app.

This little guide assumes you already have **Node.js** installed and some little experience on running commands from within the **CLI** (Terminal or bash interface)

## The backend

I've used Node.js and **Express.Js** to develop this api-only backend POC and here the steps to set it up properly considering the final goal:

- Create a new Github repository, check it out on your local computer, open that folder with your CLI
- Run `npm init` to set up a package.json file
- Run `npm i express` to install ExpressJs
- Create a new `index.js` file with the following code:

```javascript
const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})

app.listen(3000, () => console.log('server started'))

```

- Add in `package.json` the command `"start": "node index.js"` in `"script"` portion
- Run your backend with `npm start` and test it with your browser `http://localhost:3000/api`, you should see the response

## The Frontend

Now it's time for the front end part. I like **Vue.Js** in these days, therefore, this sample is Vue based. The goal of the app is to make a remote request to a server (the backend) in order to get some data.

Here the steps:

- Create a new Github repository, check it out on your local computer, open that folder with your CLI

- Run `npm init` to set up a package.json file

- Run `npm i vue` to install VueJs

- Create a new `index.html` file with the following code:

- ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title></title>
  
    <script type="text/javascript" src="node_modules/vue/dist/vue.js"></script>
    <script type="text/javascript" src="node_modules/axios/dist/axios.js"></script>
  </head>
  <body>
    <div id="app">
      <textarea v-model="src"></textarea>
    </div>
  
    <script type="text/javascript">
      new Vue({
        el: '#app',
        data: {
            src: ''
        },
        mounted(){
          var vm = this
          axios.get('http://localhost:3000/api')
            .then(data => {
              vm.src = JSON.stringify(data.data)
            })
        }
      })
    </script>
  </body>
  </html>
  ```

- Test with a local webserver (you can use `http-server` or something similar)

At this point, you should get an error in the console `Access-Control-Allow-Origin` because the security policy of the browser. To fix it we need to add something on the backend installing the `cors` module:

```javascript
const cors = require('cors')
app.use(cors())
```

Now the backend is able to handle the cross origin request properly. If you run the frontend with `http-server` you can reach it with `http://localhost:8080` while the backend uses ``http://localhost:3000`` as domain name.

All these stuff work on our local machine, now it's time to let them available to the world.

## Deploy the backend on Heroku

The steps to put our little backend on Heroku are minimal.

- Change the port setting in the `index.js` code:

```javascript
const port = process.env.PORT || 3000
...
app.listen(port, () => console.log('server started on port', port))
```

This is very important otherwise the server app won't start.

- On Heroku Dashboard, create a new App and connect it to your Github repository, click the manual deploy and check it with the public URL provided by Heroku

Your backend should be up and running at Heroku scale!

## Deploy the frontend on Netlify

Deploying a simple website on Netlify usually require just a repository connection. In our case, we need to set up also a little build command since we're using a couple of Npm modules, that won't be published by Netlify:

- On Netlify Dashboard, create a new App and connect it to your Github repository
- Set in the build setting the build command with `npm start` and the deploy folder with `dist`
- Add in the `package.json` file, in the `"Script"` portion, this command:

```bash
mkdir dist && cp node_modules/vue/dist/vue.js dist/vue.js && cp node_modules/axios/dist/axios.js dist/axios.js && cp index.html dist/index.html
```

We need also to edit the script import relative path in the HTML file:

```html
<script type="text/javascript" src="vue.js"></script>
<script type="text/javascript" src="axios.js"></script>
```

As well as in the javascript part the localhost URL that need to be changed with the Heroku one:

```javascript
// this url must be the Heroku remote one
axios.get('http://localhost:3000/api')
// change to something like
axios.get('https://poc-express-api-heroku.herokuapp.com/api')
```

> Blame to me!

I know, not very optimal process, blame my lazyness, but this is just to test the system quickly. In a next tutorial (where I want to involve also **authentication** and **user session**) I'll try to streamline a bit also this part.

If everything has been done properly, your webapp made by an API-based backend running on Heroku with a Vue-based SPA running on Netlify should work nicely.

Here the repositories:

- [Backend](https://github.com/abusedmedia/poc-express-api-heroku)
- [Frontend](https://github.com/abusedmedia/poc-vue-client-netlify)

Have a nice deploy!
