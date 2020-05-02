---
title: Roblox Script Making a UI panel with dynamic value
date: 2020-05-02 05:13:00 +0100
subtitle: 2nd May, 2020
categories: Tips
---

To create a billboard panel in Roblox you have to add it in the editor in the **StarterGui**, adding within:

- a ScreenGui
- a Frame
- a TextLabel
- a LocalScript

You should see something like:

![](../assets/tips/n319_screen-shot-2020-05-02-at-09.12.29.png)

You can configure properties and position of the panel using the Properties panel.

Then, add this code in the LocalScript:

```lua
print("Hello UI!")
script.Parent.Text = math.random(0,1000)
```

This script will be executed when the UI will be shown.