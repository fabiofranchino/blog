---
title: Git depth and commit with shallow repository
date: 2020-04-03 08:33:00 +0100
subtitle: 3rd April, 2020
categories: Logs
tags: [log]
---

Git depth and commit with shallow repository

From time to time I re-use a prototype to kick-off a new and different one.

I usually clone back the repository of the former prototype to start working on the latter.

When finished, I publish the new repository. Of course I don't want to mix-up the histories of both repo, thus, I need a way to reset the former history.

I usually clone the starting repository using:

```shell
git clone --depth=1 ...
```

but unfortunately a shallowed repository  doesn't allow to push new commits.

To solve that, you need to explicitly re-init a new repository, here the steps:

```shell
rm -rf
git init
// commit your stuff
git remote add origin ...
git push
```

