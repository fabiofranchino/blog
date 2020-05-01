---
title: Roblox Script make the Humanoid jump automatically
date: 2020-05-01 15:25:00 +0100
subtitle: 1st May, 2020
categories: Tips
---

To make the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) jumps on touching a Part, it's pretty straightforward:

```lua
local function onTouch(part)
	local humanoid = part.Parent:FindFirstChildWhichIsA("Humanoid")
	
	if humanoid then
		humanoid.Jump = true
	end
end

script.Parent.Touched:Connect(onTouch)
```

If we want to affect the `JumpPower` just for this automatic jump:

```lua
local function onTouch(part)
	local humanoid = part.Parent:FindFirstChildWhichIsA("Humanoid")
	
	if humanoid then
		humanoid.JumpPower = 200
		humanoid.Jump = true
		wait(1)
		humanoid.JumpPower = 50
	end
end

script.Parent.Touched:Connect(onTouch)
```

