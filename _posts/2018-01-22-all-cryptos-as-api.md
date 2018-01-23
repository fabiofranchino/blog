---
title: All Cryptos as API
date: 2018-01-22 12:00:00 +0100
subtitle: 22nd January, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, scaping, jquery, crypto, runkit]
---

**Update:** it turns out there is a public [API](https://coinmarketcap.com/api/) on Coinmarketcap.com I didn't find out before. Thanks to let me know.

Following the [previous article](/blog/welcome-cryptocurrency/) about getting the whole list of the cryptocurrencies from Coinmarketcap.com, here the same scraping code packed in a nice end-point call thanks to [Runkit](https://runkit.com/), of course.

I've resurrected a previous and working example that uses Cheerio to transform the HTML source in a JSON array.

You can check the source [here](https://runkit.com/abusedmedia/coinmarketcap-all-list-api) or test the API call straight [there](https://coinmarketcap-all-list-api-hki9psot86nl.runkit.sh/).