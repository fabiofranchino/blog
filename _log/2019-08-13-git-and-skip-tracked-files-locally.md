---
title: Git and skip tracked files locally
date: 2019-08-13 07:49:00 +0100
subtitle: 13th August, 2019
categories: Logs
tags: [log]
---

Today I've learned something new on Git, which is BTW a huge tool there's no end to learning.

There's a file (Adobe Illustrator file) I need to edit in order to use it in my workflow.

I don't want to commit my edits since they are only meant to open it properly.

I can skip an already tracked file in my future commit with this command:

```
git update-index --skip-worktree FILEPATH
```

and if I want to check the ignored files, there is this way, found [here](https://stackoverflow.com/questions/42363881/how-to-list-files-ignored-with-skip-worktree):

```
git ls-files -v . | grep ^S
```

where `git ls-files` list all the git files, `-v` makes it verbose, `grep ^S` filter out the lines without `S` which means 'skip-worktree'.

Easy-peasy.