---
title: Welcome cryptocurrency
date: 2018-01-19 15:00:00 +0100
subtitle: 19th January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, scaping, jquery, data, runkit]
---

Everybody talks about cryptocurrencies these days.

I'd like to explore the topic using a data-exploration approach.

The first thing to do is to find some dataset about the existing currencies out there. I've found [CoinMarketCap.com](https://coinmarketcap.com/) as a good source but, unfortunately, no open data source there,  except a couple of JSON files used for some website search functions.

So, again, time for a good scraping activity, which is always fun.

jQuery is already included in the website, thus, here the snippet that might be used to dump all the crypto currencies listed on the [full list page](https://coinmarketcap.com/all/views/all/). Just open the javascript console and paste this code:

```javascript
var db = []
$('[role="row"]').each((i, e) => {
  var el = $(e)
  var ob = {}
  ob.id = el.attr('id')
  ob.name = el.find('.currency-name-container').text()
  ob.sym = el.find('.col-symbol').text()
  ob.cap = el.find('.market-cap').text()
  ob.price = el.find('.price').text()
  ob.circ = el.find('.circulating-supply').text().trim()
  ob.vol = el.find('.volume').text()
  ob.h = el.find('.percent-1h').text()
  ob.d = el.find('.percent-24h').text()
  ob.w = el.find('.percent-7d').text()
  db.push(ob)
})
console.log(JSON.stringify(db))
```

Of course, this snippet will work until the HTML markup won't be rearranged.

A better approach might be using [Runkit](https://runkit.com) to expose that snippet as an API-call in order to get the latest state of the list anytime you need it.

Next time.