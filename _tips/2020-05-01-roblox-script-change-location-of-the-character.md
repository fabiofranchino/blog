---
title: Roblox Script Change location of the Character
date: 2020-05-01 17:41:00 +0100
subtitle: 1st May, 2020
categories: Tips
---

This code changes the location of the player character when touch a Part:

```lua
local function onTouch(part)
	local humanoid = part.Parent:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
    local character = humanoid.Parent
    local dpos = CFrame.new(game.Workspace.Goal.Position + Vector3.new(0,20,0))
    character:SetPrimaryPartCFrame( dpos )
	end
end

script.Parent.Touched:Connect(onTouch)
```

You need to place a Part with name `Goal` to make it work properly. 