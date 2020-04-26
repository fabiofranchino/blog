---
title: Roblox Script Detect new Players in the game
date: 2020-04-26 13:25:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

Roblox Script Detect new Players in the game

This script will run a function for each new Player in the game:

```lua
local Players = game:GetService("Players")

local function onPlayerAdded(player)
	print("new Player:", player)
end

Players.PlayerAdded:Connect(onPlayerAdded)
```

and here the code to performe some action on each current Player in the game:

```lua
local Players = game:GetService("Players")

for i, player in pairs(Players:GetPlayers()) do
  local character = player.Character
  
  if character then
    local humanoid = character.Humanoid
    -- do something with the player, the character or the humanoid
  end		
end
```

