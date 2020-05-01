---
title: Roblox Script Count anytime Player touches a Part
date: 2020-05-01 15:10:00 +0100
subtitle: 1st May, 2020
categories: Tips
---

Roblox Script Count anytime Player touches a Part

I'm extending the sample you may find in the reference of the Player [here](https://developer.roblox.com/en-us/api-reference/class/Player).

The sample script allows to create a [Folder](https://developer.roblox.com/en-us/api-reference/class/Folder) with a numeric [Value](https://developer.roblox.com/en-us/api-reference/class/IntValue)  for each new Player that comes into the game.

Adding a Part in the game with this code attached, we can keep in memory the number of touches the Player does with the Part.

This assumes the Folder is named "MyFold" and the Value "MyScore":

```lua
local function onTouch(part)
	local player = game:GetService("Players"):GetPlayerFromCharacter(part.Parent)
  
	if player then
		local score = player.MyFold.MyScore
		score.Value = score.Value + 1
	end
end

script.Parent.Touched:Connect(onTouch)
```

This is the code of the Main script that comes from the mentioned sample:

```lua
local Players = game:GetService("Players")

local function onAdded(player)
	
	local fold = Instance.new("Folder")
	fold.Name = "MyFold"
	
	local score = Instance.new("IntValue")
	score.Name = "MyScore"
	score.Value = 0
	score.Parent = fold
	
	fold.Parent = player
end

Players.PlayerAdded:Connect(onAdded)
```

