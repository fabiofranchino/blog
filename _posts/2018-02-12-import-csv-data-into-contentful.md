---
title: How to import csv data into Contentful
date: 2018-02-12 14:00:00 +0100
subtitle: 12th February, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, nodejs, contentful, import, data, dump]
---

Developing a CMS is hard. 

This is why [Contentful](https://www.contentful.com/), or any other equivalent white-label and generic CMS, is a very interesting option when a project requires a way to manage contents maintaining a clear separation with the possible end-points (website, mobile-app, installation, etc).

It doesn't come for free (but there's a free tier, though), nevertheless, it's affordable enough for most small/mid size project in our field.

Recently, I had the necessity to import a consistent set of information into Contentful.

While it comes with a layer of API in order to both read and write information, there's a quicker way to handle this specific task with ease.

Using a specific module for Node.js, it's a matter of few lines of javascript to read a file in order to put it into the database of the service.

First thing, let's include the required modules (remember to install them first with `npm`):

```javascript
const contentful = require('contentful-management')
const d3 = require('d3')
const fs = require('fs')
```

Then, read the local dump, assuming it's a csv formatted file (yes, I'm using D3.js just to parse the file because I feel at home with it):

```javascript
var raw = fs.readFileSync('db.csv', 'utf8')
var dsv = d3.dsvFormat(';')
var db = dsv.parse(raw)
```

Now, let's create a connector with the Contentful backend:

```javascript
const client = contentful.createClient({
  accessToken: '<your-access-token>'
})
```

You can create the access token in "Space settings/Content management tokens" tab, remembering that you can see it **just one time** during the creation process (so, copy it before close the modal).

Now it's time to perform some [data munging](https://en.wikipedia.org/wiki/Data_wrangling) in order to be compatible with the Contentful space structure.

Suppose you have this csv file:

```
id,TheName,TheAge
1,John,42
2,Tim,41
3,Jep,39
4,Min,28
```

and want to map each csv column with the right field name in the content-model:

```javascript
client.getSpace('<space-id>')
    .then((space) => space.createEntry('<content-type-name>', {
        fields: {
            name: {
                'en-US': d.TheName
            },
            age: {
                'en-US': d.TheAge
            }
        }
	}))
    .then((entry) => console.log(entry))
    .catch(console.error)
```

You see, you have to properly fill the **space-id** and the **content-type-name** as well as respecting the same field structure you gave on your content model.

Now it's a matter of include tha above snippet into a function and call it for each row parsed from the csv.