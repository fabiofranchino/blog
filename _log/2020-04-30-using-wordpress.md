---
title: Using Wordpress
date: 2020-04-30 14:33:00 +0100
subtitle: 30th April, 2020
categories: Logs
tags: [log]
---

This is a reminder to start with the API of Wordpress.com as CMS only. [Here](https://developer.wordpress.com/docs/api/) the documentation and here the API endpoint:

```shell
https://public-api.wordpress.com/rest/v1.1/sites/<YOURNAME>.wordpress.com/posts
```

If you need a CDN, the media base URL to use should be:

```shell
https://<YOURNAME>.files.wordpress.com/path/to/image.png
```

