---
title: Vue CLI and custom local domain
date: 2019-08-30 11:49:00 +0100
subtitle: 30th August, 2019
categories: Logs
tags: [log]
---

I have a local dev setup with browser-sync and other toolchain that I want to replace with the Vue CLI.

For technical reasons, I need to use a custom local domain during development, configured in the `hosts` file of my system, such as `http://myapp.mypersonaldevdomain.com`.

So, here the surprice running `npm run serve` from a Vue app, trying to point that domain in the browser:

> Invalid Host header

The solution is quite straightforward, configuring an option in the webpack config, as outlined in this [comment](https://github.com/vuejs-templates/webpack/issues/1205#issuecomment-404321666):

```javascript
devServer: {
  disableHostCheck: true
}
```

That fixed the issue giving me the possibility to run my app throught my local domain.

Not really sure the reason why of this check, though.