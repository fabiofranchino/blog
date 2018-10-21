---
title: Multer and the req
date: 2018-10-21 05:21:00 +0100
subtitle: 21st October, 2018
categories: Logs
tags: [log]
---

Learning is about discovering tips and tricks that ease your daily job.

Today I've learned something about the popular uploading module for Node.js, [Multer](https://github.com/expressjs/multer), that ease the management of file upload functionality.

After a lot of trial and error trying to move the uploaded file to a specific location based on some user sent parameters, without luck, I've found the solution on this StackOverflow [post](https://stackoverflow.com/questions/39589022/node-js-multer-and-req-body-empty).

This is the hint:

> Note that req.body might not have been fully populated yet. It depends on the order that the client transmits fields and files to the server.

So, the order of the field sent by the user form is relevant to the backend behaviour.