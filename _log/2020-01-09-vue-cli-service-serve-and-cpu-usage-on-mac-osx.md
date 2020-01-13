---
title: vue-cli-service serve and CPU usage on Mac OSX
date: 2020-01-09 15:18:00 +0100
subtitle: 9th January, 2020
categories: Logs
tags: [log]
---

Dealing with this issue for a while, here the solution right from [Stackoverflow](https://stackoverflow.com/questions/56768388/high-cpu-usage-from-node-js-when-running-vue-cli-service-serve):

```shell
npm install fsevents -g
npm rebuild fsevents
```

