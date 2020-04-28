---
title: Roblox Script Using TweenService for Animation
date: 2020-04-26 13:56:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

This is a hello-world for Tween, aka Animation. Given a Part in the `workplace` named `Little`, this script will randomize its position animating the change:

```lua
local TweenService = game:GetService("TweenService")

while true do
	wait(5)
	
	local goal = {Position = Vector3.new(math.random(-20,20), 10, math.random(-20,20))}
	
	local twinfo = TweenInfo.new(3)
	local tw = TweenService:Create(workspace.Little, twinfo, goal)
	tw:Play()
	
end
```

