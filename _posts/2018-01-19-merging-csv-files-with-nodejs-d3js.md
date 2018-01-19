---
title: Merging csv files with Node.js and D3.js
date: 2018-01-19 14:00:00 +0100
subtitle: 19th January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, nodejs, data, d3js, wrangling]
---

[Node.js](https://nodejs.org) is awesome because it's an ecosystem. It's even more awesome when used together with some popular libraries such as [D3.js](https://d3js.org/) and [Lodash](https://lodash.com/). 

## The goal

I've had to pre-process a bunch of csv files in order to work with a single dataset file for convenience. Node.js is the platform of choice for this type of tasks now and I couldn't be more satisfied of it.

## The process

Here a walk through of this little script that saves to me a lot of time.

Import our weapons:

```javascript
const d3 = require('d3')
const fs = require('fs')
const _ = require('lodash')
```

Reading a folder to get the file list calling a function for each file:

```js
var files = fs.readdirSync(`${__dirname}/data`)
_.each(files, filename => process(filename))
```

Read the csv content and parse it with D3.js:

```javascript
var process = name => {
  var raw = fs.readFileSync(`data/${name}`, 'utf8')
  var csv = d3.csvParse(raw)
}
```

Wrangling some values before commit to the final array:

<lineselect lines="2-5" ></lineselect>

 ```javascript
var process = name => {
  ...
  var parse = d3.timeParse('%m/%d/%y')
  csv.forEach(d => {
    d.timestamp = parse(d.Dates)
  })
}
 ```

Create an unique array with all the csv files merged together (thanks Lodash):

<lineselect lines="3-4" ></lineselect>

```javascript
var db = []
var process = name => {
  ...
  var newdb = _.unionBy(db, csv, 'Dates')
  db = newdb
}
```

Save the final dataset as JSON file:

<lineselect lines="2-2" ></lineselect>

```javascript
var process = name => {
  ...
  fs.writeFileSync('db.json', JSON.stringify(db))
}
```

The whole script generates a json file with all the entries. A perfect starting point for an explorative session with D3.js.

Feel good.