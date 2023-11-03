---
title: "My Neovim in VSCode setup"
type: "blog"
date: 2023-11-03T20:00:00+01:00
---

My last update about Neovim, I swear :D
<!--more-->

So, I think I've finally managed to get a working setup for Neovim keybindings in VSCode going. In fact, I'm not only using the Neovim keybindings - **I'm actually running Neovim inside VSCode**.

I've been checking out this [Neovim plugin for VSCode](https://github.com/vscode-neovim/vscode-neovim). Here Neovim is used for the actual code editing but you still have a normal Visual Studio Code experience. After a bit of tinkering - it seems that I now have a setup with which I can actually be productive while getting the best of both worlds.

For Neovim, I'm using [LazyVim](https://www.lazyvim.org/) and its developer [folke](https://github.com/folke) just recently put out an additional feature called **extras**, which also includes [one for VSCode](https://www.lazyvim.org/extras/vscode). This basically disables all the existing plugins except for some very basic ones that are useful for purely text editing and wouldn't mess things up when using Neovim inside VSCode. It also sets some useful keybindings that make using VSCode feel more like Neovim.

So now I basically didn't have to mess up my existing Neovim config at all, just needed to enable this extra and pretty much everything seems to work out of the box.

- all the usual vim keybindings work out of the box
- my personal keybindings from Neovim are now available when editing text in VSCode
- the plugin that let's me jump around in a file comfortable (leap or flash, idk which one is used in the extra exactly), works out of the box which has been a big pain point when using VSCode without it (the color highlighting is still a bit weird but I'm sure I'll find a way to fix it, it's not a dealbreaker for now)
- the common vim commands are autofilled and shown in a little dialog withing VSCode
- SPC + SPC opens a fuzzy file picker (even though it can't beat the speed of the file picker in Neovim)

This means I don't need to unlearn/relearn any muscle memory when jumping between Neovim and VSCode + I get the benefit of having a **easy and mostly automatic setup of debugging and testing** for basically any language I want to use. I tried it out for a bit in a Go project and it all just seems to work. I'll play around in a C# project too and see if everything seems fine there too.

I'll eventually still go through all the settings in the [VSCode plugin](https://github.com/vscode-neovim/vscode-neovim) once again and check if I can improve some stuff but for now it seems like I've finally managed to find a setup that let's me work comfortably. Super happy about that.

Maybe this means I'll finally start working on actual projects again instead of fucking around with my editors all the time. Haha. 
