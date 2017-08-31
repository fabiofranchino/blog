---
title: "Shell Trick: Alias for common commands"
date: 2017-08-31 14:00:00 +0100
subtitle: 31th August, 2017
style: blue
categories: Tutorials
tags: [tutorial, shell, terminal, tip]
---

I use the shell (the Terminal on Mac Os X) every day. If you work with Git or Node.js like me, you cannot avoid it. It's simply part of the development stack. For that reason I've started to find a way to make shortcuts for some common shell commands I use every day.

At first, I've started with the weird way, using AppleScript to create an Applet just to invoke the Terminal application, filling and run a command for me, such as:

```shell
tell application "Terminal"
	activate
	do script "cd /Users/me/Projects/Repositories"
end tell
```

Actually It works but I've felt that was not the right way to do.

After a bit of research I've learned the right one. The shell (bash) has the `alias` function that does precisely this sort of things.

Creating an `alias` is straightforward, type this in the terminal:

```shell
alias myshort="cd /Users/me/Projects/Repositories"
```

then, invoke it with `myshort` hitting return. `myshort` can be anything you like.

This will work only on the current terminal window. Once you close it, the alias will be lost.  
To save the alias in a permanent way, you need to do a little bit more.

You need to edit an invisible file with the shell with this command:

```shell
nano ~/.bash_profile
```

With `nano` you need to move with the arrows and reach the bottom of the file then paste the same line we used before to set up the alias. Use CTRL+O and CTRL+X to save and close `nano`.

Now you should be able to use the alias on every terminal panels.

Source [here](http://www.techradar.com/how-to/computing/apple/terminal-101-creating-aliases-for-commands-1305638).

