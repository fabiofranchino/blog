---
title: What if your MacOs stucks on login
date: 2019-10-11 08:03:00 +0100
subtitle: 11th October, 2019
categories: Logs
tags: [log]
---

Today I've spent a not-so-nice hour of my time trying to solve an unexpected issue after upgrading my MacOsX.

I wasn't able to log-in anymore, thus, I had to investigate a bit in order to solve this `little` problem.

[Here](https://smyl.es/how-to-fix-mac-osx-stuckhanging-on-progress-bar-will-not-boot/) the resource that helps a lot on finding and solving the issue as well.

It's all related to some custom `kext` OS extension that was not compatible anymore the new Operating System.

Removing them I was able to log-in again.

Not, get back to work!

## Update

Since I've got the same issue after a minor system update, I'm going to outline the procedure in case other external sources disappeared for some reasons.

Here the step by step to recover my MacOsX after an update with a stuck situation during log-in:

- Boot in recovery mode (with CMD+R and run the power button)
- Open the Terminal from menu
- Run `diskutil list` to list all the drives
- Identify your encrypted drive and copy the UUID (the long string next to the drive line)
- Run `diskutil cs unlockVolume UUID` where UUID is the string in the clipboard
- Hit return and write your password
- Run `cd /Volumes/<YOUR DRIVE NAME>/Library/Extensions` and run `ls`
- You should see some .kext files that might be the reason of the issue
- Move the extension you think are the problem (you can move them all) using `mv EXTENSIONNAME other/location`
- You can create in Library another folder such as `ExtensionsDisabled` and put all of them there.
- Run `reboot` and now it should login.