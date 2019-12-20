---
title: Avoid BOT in email clients affecting user session
date: 2019-12-20 10:27:00 +0100
subtitle: 20th December, 2019
categories: Logs
tags: [log]
---

Avoid BOT in email clients affecting user session

I've never thought about this possibility. [Recent email clients](https://blog.healthchecks.io/2019/12/preventing-office-365-atp-from-clicking-unsubscribe-links/) perform some activities using the link within the email body to protect the user of possible bad links.

The side effect of this activity is that the email client bot can performe unwanted actions such as unsubscribing to a newsletter of confirming an email link.

For that reason, it's important to set any HTTP request action that have some impact using the POST verb instead GET.

Good to know, there's always something to learn.