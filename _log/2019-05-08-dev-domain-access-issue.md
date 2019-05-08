---
title: dev domain access issue
date: 2019-05-08 05:35:00 +0100
subtitle: 8th May, 2019
categories: Logs
tags: [log]
---

.dev domain access issue

For those, like me, struggled **a lot** about accessing .dev domains even with your `.hosts` file  properly configured, [here](https://github.com/basecamp/pow/issues/474) the solution.

The problem relies on a previous version of [Pow](http://pow.cx/) installer (I didn't even remember I've installed years ago) that adds a `dev` configuration file in `/etc/resolver/` causing a local routing of any .dev domains.

After removing it, simply flush your DNS daemon, on MacOsX something like:

`sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder; say cache flushed`

Happy hacking