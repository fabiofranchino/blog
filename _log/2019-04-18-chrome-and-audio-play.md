---
title: Chrome and Audio play
date: 2019-04-18 18:50:00 +0100
subtitle: 18th April, 2019
categories: Logs
tags: [log]
---

Want to disable the default behavior of Chrome that stops the audio playback from javascript without real user interaction?

While it's ok from user perspective blocking audio play without user permission, if you want to deploy a kiosk-mode web-app, this might be a pain in the ass.

So, here the [solution](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes):

`chrome://flags/#autoplay-policy`

