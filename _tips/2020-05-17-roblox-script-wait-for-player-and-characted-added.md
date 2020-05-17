---
title: Roblox Script Wait for Player and Characted added
date: 2020-05-17 10:15:00 +0100
subtitle: 17th May, 2020
categories: Tips
---

### Listen for the Player enter/exit in the game

If you want to performe something when a new Player comes in, here the code:

```lua
-- keep the Players Service into a variable
local Players = game:GetService("Players")


-- listen for the Player added event
local function onPlayerAdded(player)
	print("new Player added:", player)
end

-- connect the function with the event
Players.PlayerAdded:Connect(onPlayerAdded)
```

This will be triggered only when the Player enters in the game.

We can liste also the opposite, when the Player decides to leave the game:

```lua
local function onPlayerRemoving(player)
	print("Player removing", player)	
end

Players.PlayerRemoving:Connect(onPlayerRemoving)
```

These events will be fired only once on a specific game.

### Listen for the Character begin the game session

 If you want to performe something every time the player starts a session, i.e. after the player dies, you need a different event.

```lua
local Players = game:GetService("Players")

local function onCharacterAdded(character)
	print("character begin", character)
end

local function onPlayerAdded(player)
	print("new Player:", player)
  player.CharacterAdded:Connect(onCharacterAdded)
end

Players.PlayerAdded:Connect(onPlayerAdded)
```



