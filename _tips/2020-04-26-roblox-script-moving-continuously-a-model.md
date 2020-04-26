---
title: Roblox Script Moving continuously a Model
date: 2020-04-26 07:10:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

Here a little script to mode a Model continuously:

```lua
local model = workspace.Model

while true do
	wait(0.1)
	local cpos = model.PrimaryPart.Position
	local npos = CFrame.new(cpos + Vector3.new(0,0,-1))
	model:SetPrimaryPartCFrame( npos )
end
```

