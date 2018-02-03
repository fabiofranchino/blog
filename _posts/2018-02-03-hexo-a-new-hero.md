---
title: "Hexo: a new Hero?"
date: 2018-02-03 14:00:00 +0100
subtitle: 3rd February, 2018
style: red
categories: Opinions
cover: cover.jpg
tags: [opinion, static, hexo, site, generator, nodejs, jekyll]
---

I've been interested in static site generators lately. 

Indeed, this blog is cooked with [Jekyll](https://jekyllrb.com/), actually the most popular static site generators out there. It does its job well, nevertheless, it shows its ages. **Developing a theme is not a nice experience.** It's in this context that Jekyll shows its age, because you have to develop the HTML/CSS theme the old way as we used to with PHP a few years ago. Crafting fake full pages in HTML/CSS, then split them into chunks in order to put it in a working system such as PHP or Jekyll.

[Hexo](https://hexo.io/), a static site generator based on Node.js, has been on my radar for a while and recently, I've had the chance to test it out. It doesn't add anything special from the innovation point of view but includes everything you need to develop a modern website with some interesting features that complete somewhat my requirements in order to support fast prototyping and iterations:

- partial includes
- templating
- data store (markdown and json)
- post process (minification, babel)
- extendible (with plugin)
- hot reload (with [Browser-sync](https://github.com/hexojs/hexo-browsersync) official plugin)

While almost all of those requirements are present in many static generators, Jekyll included, the last one is what I'm excited more.

Furthermore, Hexo has some interesting points, such as:

- template engine agnostic
- solid plugin architecture
- scripts features

I'm currently testing it to evaluate a possible adoption to support the development of a wide range of digital product. I'll publish my results on this blog, of course.

