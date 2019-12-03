---
title: Target to a custom Mode in Vue CLI
date: 2019-12-03 04:49:00 +0100
subtitle: 3rd December, 2019
categories: Logs
tags: [log]
---

Just a reminder and a TIL about customize the development setup of a Vue app with the CLI.

If you need to create a new custom [Mode](https://cli.vuejs.org/guide/mode-and-env.html#modes) (other than 'staging', 'test' and 'production'), here the tip:

- create a new `.env.mymode` file (where `.mymode` is the name of your mode)
- write in it `NODE_ENV=mymode`
- add in `package.json` a new run in "scripts" like `vue-cli-service serve --mode mymode`
- Run it with the new command name (such as `npm run mymode`)
- Use anywhere in your code both the injected env variables as well as the `process.env` variable such as:

```js
if (process.env.NODE_ENV === 'mymode') {
  console.log("another mode!")
}
```

Tip mainly from [here](https://stackoverflow.com/questions/59083747/in-vue-cli-how-to-use-custom-mode-and-build-like-in-production-mode).