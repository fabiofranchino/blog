---
title: Roblox Script Understanding Touched event
date: 2020-05-01 15:10:00 +0100
subtitle: 1st May, 2020
categories: Tips
---

This is a very basic script to understand the `Touched` event of any object.

Attach this script to an object:

```lua
local function onTouch(part)
	print("Touched by", part)
end

script.Parent.Touched:Connect(onTouch)
```

Whenever an object touches this, the `print` function will be executed showing that object.