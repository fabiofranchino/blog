---
title: Ngrok service
date: 2018-09-05 15:02:00 +0100
subtitle: 5th September, 2018
categories: Logs
tags: [log]
---

Today I've discovered [Ngrok](https://ngrok.com/), a neat service to expose local services to remote clients. Just sign-up and download its driver in order to use it by following the provided instructions.

I'm on MacOsX and I put the `ngrok` binary into `Application` folder. Then, I've created a softlink of it in order to run from the shell with ease.

[This](https://superuser.com/questions/386345/what-is-the-correct-way-to-alias-applications-in-os-x-through-bash) is where I've learned the command to make the softlink:

```shell
ln -s /Applications/ngrok /usr/local/bin/ngrok
```

Now I can run any `ngrok` command from anywhere. To test it just write:

```shell
ngrok help
```

or to expose a local web-server such as a running `browser-sync` instance, type:

```shell
ngrok http 3000
```

Then, follow the printed info within the shell to grab the public remote url and enjoy.