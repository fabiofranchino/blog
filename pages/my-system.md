---
title: My System
layout: page
last_modified_at: 2017-09-29
permalink: /pages/my-system.html
---

This page is meant to be a personal repository of chunk of information regarding my computer setup. It may be useful in case I need to restore my computer for some reasons as well as it may be useful for other people. It's also meant to be a living document representing the latest snapshot of my current system trying to outline also the reason why of specific choices.

## Managing

I used to track my personal and professional tasks with a custom method you can read about [here](http://fabiofranchino.com/blog/the-getting-things-done-issue/). I feel confortable using [Basecamp](https://basecamp.com) to comunicate with my team in projects.

## Writing

I [write in markdown](/blog/i-love-markdown/) whenever is possible. I use two different editors based on the type of document I'm gonna to make. [Typora](https://typora.io/) is the editor of choice for verbose documents (i.e. blog post or similar writings). When I need to structure content (outline, presentation content, etc) I use [MacDown](https://macdown.uranusjr.com/).

## Presentations

I use [Deckset](https://www.decksetapp.com/) for all my presentation slides. It's simply awesome. You just write structured markdown, focussing on the content and you get beautiful slides in seconds.

## Development

### Node.js

I use Node.js everyday. It's awesome.

Actually I've installed the following versions:

- 0.12.7
- 4.1.0
- 6.11.2

The last one is the default version on my system.

### NVM

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

To change the default version of Node.js with NVM, use this command (thanks this [article](https://eric.blog/2016/08/23/set-default-node-version-with-nvm/)):

```shell
nvm alias default 8.0.0
```

