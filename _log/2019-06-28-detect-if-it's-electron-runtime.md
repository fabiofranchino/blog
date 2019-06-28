---
title: Detect if it's Electron runtime
date: 2019-06-28 04:03:00 +0100
subtitle: 28th June, 2019
categories: Logs
tags: [log]
---

Detect if it's Electron runtime

When I need to share the same codebase between a WebApp and an ElectronApp, I use the following condition to run specific code based on the host environment:

```javascript
if (window.process && window.process.type && window.process.type === 'renderer') {
  // run code for Electron only
}
```

Not beautiful but it works!