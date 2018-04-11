---
title: How to use Google Spreadsheet as data source
date: 2018-04-11 14:00:00 +0100
subtitle: 11th April, 2018
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, csv, spreadsheet, import, data]
---

Do you know you [can publish](https://support.google.com/docs/answer/183965?hl=en) any **Google Spreadsheet** in a **CSV** format for convenient usage in other environments, let's say, in a **D3.js** script?

I know, it's not the revelation of the year. Blame to me since I've discovered it only recently.

Google Spreadsheet can be an effective and accessible tool for initial data cleaning, exploration and visualization. Indeed, it can be used also for powerful data wrangling thanks to its set of formulas and computation ability.

It can be used as a single source of truth (because the export gets updated automatically if you modify something in the sheet) for an interactive visualization making it an interesting option for every DataViz practitioners.

The following is a very basic Proof-Of-Concept of what I said. The spreadsheet can be published as a whole as well as a partial set of sheets. You can grab the URL according to the format you need, for instance, here the HTML format for easy embedding:

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpHUOTLcRgjx2LxaV4Yl0_pH4aSTIe7Dnv2w3fzUs5wPq81mWi1VB9hBds2cVpoUZLC6ClgXsT-KwT/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

And here the live sketch with a little barchart using the spreadsheet as data source:

<p data-height="265" data-theme-id="light" data-slug-hash="NYoZzb" data-default-tab="js,result" data-user="abusedmedia" data-embed-version="2" data-pen-title="TestLoadGSPXwithD3" class="codepen">See the Pen <a href="https://codepen.io/abusedmedia/pen/NYoZzb/">TestLoadGSPXwithD3</a> by Fabio Franchino (<a href="https://codepen.io/abusedmedia">@abusedmedia</a>) on <a href="https://codepen.io">CodePen</a>.</p>

I'll post more use-case with this combination.