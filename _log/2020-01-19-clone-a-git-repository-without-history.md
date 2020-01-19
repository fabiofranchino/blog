---
title: Clone a git repository without history
date: 2020-01-19 13:34:00 +0100
subtitle: 19th January, 2020
categories: Logs
tags: [log]
---

There are [many ways](https://stackoverflow.com/questions/30001304/clone-git-repository-without-history) to clone a repository without its history.

The cleanest way is, no doubt, starting from fresh by deleting the .git folder and creating a new one with:

```shell
rm -rf .git
git init
```

Nevertheless, for small scaffolding project I use, I'd prefer using this command:

```shell
git clone --depth 1 reponame.git
```