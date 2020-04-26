---
title: Roblox Script Change the position of a Part
date: 2020-04-26 07:10:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

If you have a Part in the workspace with the name `MyPart`, changing its position with script is all about writing:

```lua
workspace.MyPart.Position = Vector3.new(50,0,0)
```

If you want to move the Part by some value, you need to make an operation:

```lua
local pos = workspace.MyPart.Position
workspace.MyPart.Position = pos + Vector3.new(-30,0,0)
```

Let's play a bit more, consider that the default Baseplate is a Part, thus, change its initial position at runtime:

```lua
workspace.Baseplace.Position = Vector3.new(0,-50,0)
```

