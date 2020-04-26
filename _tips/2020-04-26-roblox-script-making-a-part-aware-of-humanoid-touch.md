---
title: Roblox Script Making a Part aware of Humanoid touch
date: 2020-04-26 11:47:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

Roblox Script Making a Part aware of Humanoid touch

Making a Part aware of the Humanoid interaction is a very popular function on Roblox.

The Script attached to the Part need something like:

```lua
local p = script.Parent

local function touch(part)
	local partParent = part.Parent
	local humanoid = partParent:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
		-- do something with humanoid
	end
end

p.Touched:Connect(touch)
```

Once the Humanoid touches the Part, its Script can kill him resetting his Health:

```lua
local p = script.Parent

local function touch(part)
	local partParent = part.Parent
	local humanoid = partParent:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
		humanoid.Health = 0
	end
end

p.Touched:Connect(touch)
```

Or just reducing his Health:

```lua
local p = script.Parent

local function touch(part)
	local partParent = part.Parent
	local humanoid = partParent:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
		humanoid.Health = humanoid.Health - 10
	end
end

p.Touched:Connect(touch)
```

