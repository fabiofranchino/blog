---
title: Roblox Script create a long path of tiles
date: 2020-05-01 06:50:00 +0100
subtitle: 1st May, 2020
categories: Tips
---

We know how to create a Part with script using the `Clone` function. This code create a Part that exists in ServerStorage, a Part with name `Tile`:

```lua
local p = game.ServerStorage.Tile:Clone()
p.Parent = game.Workspace
p.Position = Vector3.new(0,0,-10)
```

We can exploit the [for-loop](https://developer.roblox.com/en-us/articles/Loops) strategy to create many tiles. The following code create 6 tiles positioned along the `z` axis assuming their size is `5,1,5`

```lua
for count = 0, 10 do
	local p = game.ServerStorage.Tile:Clone()
	p.Parent = game.Workspace
	p.Position = Vector3.new(0,0,-8.5 - count*5)
end
```

The only difference is that we need to calculate the position for each, otherwise they'll be all on the same spot, that's useless.

Before running it:

![](../assets/tips/n328_screen-shot-2020-05-01-at-10.47.40.png)

After hit Run:

![](../assets/tips/n318_screen-shot-2020-05-01-at-10.48.09.png)