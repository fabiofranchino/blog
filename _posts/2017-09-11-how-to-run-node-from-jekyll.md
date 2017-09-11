---
title: How to run Node.js before Jekyll build
date: 2017-09-11 14:00:00 +0100
subtitle: 11th September, 2017
style: blue
cover: cover.jpg
categories: Tutorials
tags: [tutorial, jekyll, nodejs, ruby, builder]
---

I've recently added a tiny feature on my [main website](https://fabiofranchino.com). In a section, it shows the number of words written and published on this blog. A fancy way to suggest that there is also a blog you can use to know more about me.

That number is growing on every article I publish but I don't want to build and update my website everytime a new article come out.

To solve this issue, I've added a tiny ajax request towards a little [json](https://github.com/fabiofranchino/blog/blob/master/assets/index/count.json) file that is updated everytime the blog gets updated. I've built a little [Node.js script](https://github.com/fabiofranchino/blog/blob/master/build_index.js) that read all my blog posts generating the correct number, dumping a little json file ready to be committed.

The problem was that I have to run the Node script by hand and sometimes (read: always) I forgot to run it after a new post.

My blog is Jekyll-driven, I'm quite happy with it but I'm not a rubyist and this is why I've writter that script in Node.js. I'm much more confortable with it.

After a bit of research, I found out a way to integrate the two with a Jekyll plugin that calls a Node.js script everytime I build my blog for local testing (I usually do it before publishing a new article).

The Jekyll plugin is something like:

```ruby
module RunNodeBefore
  def self.process(site, payload)
    return if @processed
    system "node build_index.js" 
    @processed = true
  end
end

Jekyll::Hooks.register :site, :pre_render do |site, payload|
  RunNodeBefore.process(site, payload)
end
```

The relevant line is:

```ruby
system "node build_index.js"
```

Yuo need to put that file within the folder `_plugins` in your Jekyll root folder in order to call it automatically.

As I said, I'm not a rubyist, therefore, I've just copy/paste/adapted something I found somewhere. 

The important thing is that it just work and I'm pretty sure I won't forget to update my *words.json* file anymore.