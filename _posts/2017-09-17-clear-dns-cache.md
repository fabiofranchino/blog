---
title: Clear DNS cache
date: 2017-09-17 14:00:00 +0100
subtitle: 17th September, 2017
style: blue
categories: Tutorials
tags: [tutorial, dns, cache, resource]
---

This might be a newbie tip.   
If you need to reach a website, by means of a domain name, and that domain has changed (or you modified) its **DNS** settings recently, you might be in trouble to reach that website with your browser.

This is because your computer is caching the DNS information, therefore, the browser is, most likely, trying to contact the wrong server.

The DNS is a server that converts the domain name you want to visit with an IP (Internet Protocol) which is a number, like a telephone number.

> To fix that situation, you need to clear the DNS computer cache.

There is this [thorough article](https://support.opendns.com/hc/en-us/articles/227988627-How-to-clear-the-DNS-Cache-on-a-computer-and-web-browsers-) that outlines precisely how to clear DNS cache of your computer, no matter the system you're running with.

In my case, OS X 10.10.x, I had to run this command from the terminal:

```shell
sudo dscacheutil -flushcache
```

Now I'm able to reach the right server again.