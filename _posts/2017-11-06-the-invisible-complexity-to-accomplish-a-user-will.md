---
title: The invisible complexity to accomplish a user will
date: 2017-11-06 14:00:00 +0100
subtitle: 6th November, 2017
style: red
categories: Opinions
tags: [opinion, ux, cto, netflix]
---

This [interesting article](https://medium.com/refraction-tech-everything/how-netflix-works-the-hugely-simplified-complex-stuff-that-happens-every-time-you-hit-play-3a40c9be254b) explains some bits of the behind the scene of the Netflix' infrastructure.

Alongside the technical details of a microservice based infrastructure that is able to handle the challenge of distributing video feeds to millions of users, optimizing each video file for the user device display size, checking and incorporate the DRM based on content and user nationality, it's impressing the amount of effort they spend to meet a **specific requirement**.

I'm talking about the fact that **people are not willing to wait** even one single second after pressing 'Play' on their preferred video content. They press it and they want to start watching immediately. The custom CDN made by thousands of computers Netflix gives to internet providers around the globe is meant only to reduce, as much as possible, the time between the click and the begin of the video feed.

It's particularly interesting the way Netflix' software begins the streaming and, during the very initial seconds of streaming, tries to adjust the playback efficiency by selecting the best CDN on a pre-selected pool of servers.

This technical choice is not simple nor cheap. On the contrary, it's something that requires huge investments.

> **This is UX**. The invisible complexity to accomplish a (apparently simple) user will.