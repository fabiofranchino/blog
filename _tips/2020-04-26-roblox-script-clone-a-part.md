---
title: Roblox Script Clone a Part
date: 2020-04-26 10:28:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

Roblox Script: Clone a Part

If you want to reuse multiple time a custom Part, let's say the one with a script attached, you can clone it.

First, you need to put the Part into `ServerStorage` to make it available during the game runtime. You can build your Part in the `Workspace` then, when you're ready, move it in the `ServerStorage`.

You need to set a unique name in order to recall properly, then, add the code:

```lua
local p = game.ServerStorage["MyPart"]:Clone()
p.Parent = game.Workspace
```

Where `MyPart` is the name of your custom Part.

After that, you can manipulate it with the common methods:

```lua
p.Size = Vector3.new(20, 1, 20)
p.Position = Vector3.new(0, 0, -50)
p.Anchored = true
p.BrickColor = BrickColor.new(255,0,0)
```

