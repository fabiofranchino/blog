---
title: Some small tips using Ace Editor
date: 2020-04-10 05:23:00 +0100
subtitle: 10th April, 2020
categories: Logs
tags: [log]
---

Some small tips using Ace Editor

Little bits learned along the way, since I'm creating a special plugin for [PRESENTA](https://www.presenta.cc).

If you want to get the selected code from within [Ace Editor](https://ace.c9.io/), here the command:

```javascript
let sel = editor.getSelectedText()
```

where `editor` is the Ace instance.

Then, my editor needs to run the selected code using the key-pair **SHIFT+ENTER**. Here the code:

```javascript
editor.commands.addCommand({
  name: 'run code',
  bindKey: {win: 'Shift-Enter', mac: 'Shift-Enter'},
  exec: (editor) => {
    run()
  },
  readOnly: true
});
```

`run()` is my function that eval the code.

Last tip for today: I want to set some initial code in Ace Editor that uses ticks, therefore, this is the way to escape ticks and templating chars within the code:

```javascript
`
{text: \`<h1>Slide \${i}</h1>\`}
`
```

That's all for now.