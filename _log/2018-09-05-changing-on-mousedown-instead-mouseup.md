---
title: Changing on MouseDown instead MouseUp
date: 2018-09-05 09:34:00 +0100
subtitle: 5th September, 2018
categories: Logs
tags: [log]
---

I've stumbled upon [this](http://actnormal.co/) website by chance recognizing immediately a little interaction detail. I'm very responsive to novel interaction paradigms, therefore, this is no exception.

[Act Normal](http://actnormal.co/), a creative studio from Sweden, got a very nice looking website. 

What got my attention, however, was the top menu behavior when you click one of each item.

The page starts navigating on `mousedown` event instead of the default behavior that waits for `mouseup` event.

This little design decision makes a little bit faster page change because it doesn't need to wait for the second event (the `up` event). We are talking about a bunch of milliseconds that are perceivable, though.

They've also made sure to allow the users to change their mind (by not start navigating) if you drag out the menu item while keep pressed:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zHBx5GQYiqo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>