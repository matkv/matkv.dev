---
title: "Arch Linux on WSL"
type: "blog"
date: 2024-04-13T00:00:00+02:00
---

A couple of weeks ago I set up Arch Linux on WSL on my personal desktop PC and I've been really happy with it -  so I thought I'd just write a couple of sentences about my experience with this setup.

<!--more-->

![Arch on WSL](/img/blog/arch-on-wsl.png)

I switched from my laptop running Manjaro Linux to a HP Omen desktop PC as my main machine. Since I was planning to use it for gaming and also for music production, I decided to go with Windows 11 as my OS and overall I don't regret it. Especially my setup with Ableton Live for music production would not have been possible on Linux.

However this now means that I'm back to Windows after using Linux as my main OS on my personal computer for several years. But now that I've set up Arch Linux on WSL I have to say that this has definitely removed *most* of the stuff that I was missing. Sure, I loved KDE as my desktop environment but at least this way I get to basically keep using the terminal as if I was still runing "normal" Linux.

So I've set up my dotfiles repo again as a bare repo and I get to keep using Neovim and Zellij and all the other applications that I've set up previously. The setup process has been really easy because the switch from Manjaro to Arch really isn't big. It definitely feels good that all the effort I've put into setting up my dotfiles now hasn't been for nothing and I basically get to keep using them just as I did before.

The integration of WSL in VSCode has also been extremely smooth - I've for example moved the repo for this website to this WSL "machine" and I'm doing all development for it through VSCode accessing WSL. It's **really** nice to work in VSCode while having the Arch Linux terminal (directly within VSCode). I'm planning to move all my dev projects that don't **need** to be on Windows over there to keep my Windows Install as clean as possible.

Overall - I'm really happy with this setup for now. I've mostly stopped messing with my config and editors for now and have actually just been working on some dev projects recently.

Currently my main projects are:

- [Playlist QuickAdd](https://github.com/matkv/playlist-quickadd) - A Windows App (WinUI) that is supposed to help me manage my Spotify playlists. 
- Learning Go - currently still going through some books and general tutorials but I want to find some actual project ideas for Go other than my small [utils](https://github.com/matkv/utils) project.
- Complete rewrite of this website - trying to focus on not splitting up the content into different content types and overall keeping the backend a lot cleaner than it is right now.