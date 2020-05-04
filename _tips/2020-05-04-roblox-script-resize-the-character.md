---
title: Roblox Script Resize the Character
date: 2020-05-04 03:42:00 +0100
subtitle: 4th May, 2020
categories: Tips
---

According to this [post](https://devforum.roblox.com/t/r15-character-scaling/30642), here the propertied that can be changed to alter the size of the 3 parts of the character body:

```lua
local Players = game:GetService("Players")

local function onPlayerAdded(player)
  
  wait(5)
  
  local character = player.Character
  
  if character then
    local humanoid = character.Humanoid
    humanoid.BodyHeightScale.Value = 2
    humanoid.BodyWidthScale.Value = 2
    humanoid.BodyDepthScale.Value = 2
    humanoid.HeadScale.Value = 2
  end
end

Players.PlayerAdded:Connect(onPlayerAdded)

```

The default values are equal to 1, therefore the above code double its size.