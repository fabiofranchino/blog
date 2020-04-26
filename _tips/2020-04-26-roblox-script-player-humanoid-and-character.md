---
title: Roblox Script Player, Humanoid and Character
date: 2020-04-26 11:47:00 +0100
subtitle: 26th April, 2020
categories: Tips
---

Roblox Script Player, Humanoid and Character

In Roblox every user reference with three important objects:

- The Player
- The Humanoid
- The Character

The Player is the object of the user account, and contains properties such as nickname and user-id.

The Humanoid contains properties for the game-play, such as Health.

The Character is the Model that contains oall the parts and behaviours.

In a Script with a Touch event, you can access those objects this way:

```lua
local p = script.Parent

local function touch(part)
	
	local humanoid = part.Parent:FindFirstChildWhichIsA("Humanoid")
	local player = game:GetService("Players"):GetPlayerFromCharacter(part.Parent)
	
end

p.Touched:Connect(touch)
```

And here what you can do with them:

```lua
if humanoid then

  print(humanoid.Health)
  print(humanoid.Parent.Head)

  print(player.Name)
  print(player.UserId)
  print(player.Character.Head)
  print(player.Character.Humanoid.Health)

end
```

You can see that you might access a specific Model part from both objects.