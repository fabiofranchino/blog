---
title: Create a website screenshot service with Puppeteer on Heroku
date: 2020-01-07 09:00:00 +0100
subtitle: 7th Jannuary, 2020
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, heroku, puppeteer, png]
---

As the post title suggests, this is a step by step tutorial on how to create and run (on Heroku) a simple remote screenshot service.

The quickest way to set it up within your [Heroku](https://www.heroku.com) account is by following this [README](https://github.com/fabiofranchino/puppeteer-heroku-screenshot-service) instruction from the repository.

But, since I'd like to document the dev and setup process in order to fix the things correctly in my mind, the following is a longer explanation.

## Set Puppeteer locally

Puppeteer is a wonderful wrapper. Basically you can run Chromium at your service, locally and remotely as well.

Let's dive first on set Puppeteer right alone.

Let's create our application in an empty folder and with the shell:

- Run `npm init -y` to create the `package.json` file
- Run `npm install puppeteer`
- Create a new file named `screenshot.js` with the following code:

```javascript
const puppeteer = require('puppeteer')

module.exports = function (url) {
  return new Promise((resolve, reject) => {
    ;(async () => {
      const browser = await puppeteer.launch({
        // headless: true, // debug only
        args: ['--no-sandbox']
      })

      const page = await browser.newPage()

      await page.goto(url, {
        waitUntil: ['load', 'networkidle0', 'domcontentloaded']
      })

      await page.waitFor(1000)

      await page.emulateMedia('screen')

      const buffer = await page.screenshot({
        fullPage: true,
        type: 'png'
      })

      await browser.close()

      resolve(buffer)
    })()
  })
}
```

Now, create another file named `test.js` with the following code:

```javascript
const screenshot = require('./screenshot')
const fs = require('fs')

;(async () => {
  const buffer = await screenshot('https://www.google.com')
  fs.writeFileSync('screenshot.png', buffer.toString('binary'), 'binary')
})()
```

And now, time to test the shit with `node test.js`

You should see after a while a screenshot of google.com  within the project folder.

## Put it in a webserver

The above test works using Node.js as command line. We want to expose the same functionality through a webserver, this way we can call the service from within the browser. Here the additional steps:

- Run `npm install express`

- Create a new file named `index.js` with the following code:

```javascript
const express = require('express')
const app = express()
const port = process.env.PORT || 3131
const screenshot = require('./screenshot')

app.get('/', (req, res) => res.status(200).json({ status: 'ok' }))

app.get('/screenshot', (req, res) => {
  const url = req.query.url
  ;(async () => {
    const buffer = await screenshot(url)
    res.setHeader('Content-Disposition', 'attachment; filename="screenshot.png"')
    res.setHeader('Content-Type', 'image/png')
    res.send(buffer)
  })()
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
```

- Add `"start": "node index.js"` within `scripts` field in `package.json`
- Run the webserver with `npm start`

You can test the webserver with the browser pointing it at `http://localhost:3131` and the screenshot service with:

```javascript
http://localhost:3131/screenshot?url=https://www.google.com
```

Now the browser should download automatically the png of the screenshot.

## Time to deploy on Heroku

Now we have the complete app, here the steps to deploy it on **Heroku**:

- On **Github**, under your account, create an empty repository, check it out locally and put all the above source in it and push them remotely.
- On **Heroku**, under your account, create a new app and connect the Github repository under the **Deploy** tab
- Now move in the **Settings** tab add the **Node.js** buildpack and this custom one `https://buildpack-registry.s3.amazonaws.com/buildpacks/jontewks/puppeteer.tgz`
- Back in **Deploy** tab, scroll down and push the **Deploy Branch** button

It will take a while since it's installing a full Chromium software.

After the deploy, click "Restart all dynos" under "more" dropdown.

If everything went fine, grab the app public URL and try to create your first screenshot using the same URL structure as before, such as:

```javascript
https://my-app-000000.herokuapp.com/screenshot?url=https://www.google.com
```

Again, the png should be downloaded automatically, but now from a remote server.

From this point you can think about how to extend it, maybe providing the user the possibility to define the url of the website or something else.

Have a nice screenshot!