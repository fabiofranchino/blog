---
title: "Git Sparse: a handy command"
date: 2017-11-15 14:00:00 +0100
subtitle: 15th November, 2017
style: blue
categories: Tutorials
tags: [tutorial, git, sparse, tip]
---

Here at [TODO](https://todo.to.it/) we design and develop a big variety of projects. 

Sometimes those projects rely on interactive software for exhibits. This means developing several software belonging to the same project and each software needs share/use some common parts. For that reason we usually put all the source code on a single git repository for convenience.

The downside of this choice is that by deploying the same repository on different machines, every time we run `git pull` to update the software it will download all the repository history with all the files related to the whole project. This is not very efficient nor bandwidth saver.

Luckily enough, git comes with a very handy command to let us save time and bandwidth by allowing to checkout a **portion** of a repository. The whole command is `sparsecheckout` and here is the gist about its setup:

1. `mkdir myRepo`
2. `git init myRepo`
3. `cd myRepo`
4. `git remote add origin <repo url>`
5. `git config core.sparsecheckout true`
6. `echo "some/dir/" >> .git/info/sparse-checkout`
7. `git pull --depth=1 origin master`

PS: each folder needs to be present in the remote repository to check it properly out.

Happy git!