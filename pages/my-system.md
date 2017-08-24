---
title: My System
layout: page
last_modified_at: 2017-08-24
permalink: pages/my-system
---

This page is meant to be a personal repository of chunk of information regarding my computer setup. It may be useful in case I need to restore my computer for some reasons as well as it may be useful for other people. It's also meant to be a living document representing the latest snapshot of my current system trying to outline also the reason why of specific choices.

## Node.js

I use Node.js everyday. It's awesome.

Actually I've installed the following versions:

- 0.12.7
- 4.1.0
- 6.11.2

The last one is the default version on my system.

## NVM

NVM is a simple bash script to manage multiple active node.js versions. You can get more information in the official [repository](https://github.com/creationix/nvm).

On MacOs X, installing NVM is a matter of a bash command run from within the Terminal:

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

The most important command in NVM are:

- nvm current
- nvm list
- nvm install *which-version-number*

Currently I'm using the 0.33.2.