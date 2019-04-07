---
title: Start develop in ES6
date: 2019-04-07 06:57:00 +0100
subtitle: 7th April, 2019
categories: Logs
tags: [log]
---

Start develop in ES6

I'm going to start a project and I decided that it would benefit develop it in pure ES6 without any other frameworks (such as Vue.js).

Looking around, [this getting started](https://medium.freecodecamp.org/how-to-install-and-run-es6-quickly-b3cb115ea3dd) is great. I read and followed it very easily.

I need to understand how to set a browser-sync process in order to automate the reload on each save (I suppose I'd add a watcher for the Rollup compilation).

Then, I need to get better about how to exploit ES6 in general since I'm not a pro on it.

Time to learn, again :)

PS: here a very basic setup to have the auto reload.

You need to use the flag in the CLI:

`rollup -c --watch`

then, you can use a Browser-sync command to reload the browser, such as:

`browser-sync start --server --files="index.html, dest/*"`

 There's just a weird double reload caused by Rollup that compile twice the bundle, I don't know why. So far, so good.