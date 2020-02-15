---
title: Enable CORS on Netlify
date: 2020-02-15 17:38:00 +0100
subtitle: 15th February, 2020
categories: Logs
tags: [log]
---

Put a file `_headers` alongside the `index.html` with the following rule:

```shell
/*
  Access-Control-Allow-Origin: *
```

