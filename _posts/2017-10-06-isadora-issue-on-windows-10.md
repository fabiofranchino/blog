---
title: Isadora and Windows 10 Pro
date: 2017-10-06 14:00:00 +0100
subtitle: 6th October, 2017
style: blue
categories: Tutorials
tags: [tutorial, isadora, windows, issue]
---

I'm using [Isadora](https://troikatronix.com/) for a project. I'll definitely write an article about it since it's a very good piece of software for interactive and media installation.

Right now, I'm only documenting an issue I've experienced yesterday, just in case I need it again and for posterity.

On a brand new NUC with i7 and Windows 10 Pro(blems), Isadora didn't want to run due some missing **.dll**. Those lib were `msvcp100.dll` and `msvcr100.dll`, don't ask me what are all about.

Obviously, I've searched for possible solutions without any luck. I've only realized that the issue was related to the Visual C++ installation on my computer. 

After 2 hours battling with it (trying to install several versions of the package) I've finally found out [this](http://answers.ea.com/t5/Technical-Issues/MSVCP100-dll-missing-in-windows-10/td-p/4702068) answer. Hammering a little bit more, I've installed [this](https://www.microsoft.com/en-ca/download/details.aspx?id=40784) version of Visual C++ that solved the issue.

Meh… I love the tech!