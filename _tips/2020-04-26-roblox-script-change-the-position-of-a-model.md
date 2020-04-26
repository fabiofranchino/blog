---
title: Roblox Script Change the position of a Model
date: 2020-04-26 07:10:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

Changing a position of a Part it's about using `Position` property.

Doing the same for a Model, is not going to work.

We need to alter the `CFrame` property instead using a specific method:

```lua
workspace.MyModel:SetPrimaryPartCFrame( CFrame.new(0,100,-30) )
```

If we want to move the model, we can compute the new position with an operation:

```lua
local model = workspace.MyModel
local cpos = model.PrimaryPart.Position

wait(5)

local npos = CFrame.new(cpos + Vector3.new(0,0,-100))
model:SetPrimaryPartCFrame( npos )
```

