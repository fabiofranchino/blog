---
title: Roblox Script Interacting with the script console, primer
date: 2020-05-04 03:42:00 +0100
subtitle: 4th May, 2020
categories: Tips
---

The console allows to get messages from scripts. We can also use it to insert commands in real-time during the run-time of the game.

Here a simple one:

```lua
game.Players.LocalPlayer.Character.Humanoid.HeadScale.Value = 2
```

The above line alter the head size of the player, we can play in real-time to fine tuning the perfect value.