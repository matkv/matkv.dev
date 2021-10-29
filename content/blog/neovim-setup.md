---
title: "Neovim Setup"
date: 2021-10-29T16:34:03+02:00
draft: false
---

I decided to try out Neovim so I will use this blog post to document the setup process.

My main goals are:

* Automate the setup process as much as possible so that I can easily reuse my configuration on a different computer.
* Setup an built-in file browser and a nice theme (maybe the palenight theme)
* Setup code completion for my most used languages, maybe try C# first

## Introduction

After installing Neovim (on Manjaro Linux: `sudo pacman -S neovim`) I can start it with the command `nvim`. 

I created an `init.lua` file in my dotfiles repository and symlinked it to the location of the actual Neovim config file:

```
ln -s ~/dotfiles/nvim/init.lua ~/.config/nvim/init.lua
```

This way I should be able to change my config and still be able to have some version control because it is in my dotfiles repository.

## init.lua

We can configure Neovim using the `init.lua` file. For example, we can enable line numbers by adding this line to the config file:

```
vim.wo.number = true
```

### Option levels

There are several option levels:

* `vim.o.{option}`: global options
* `vim.bo.{option}`: buffer-local options
* `vim.wo.{option}`: window-local options

Each option is specific to a level; for example - the `number` option is only available in the `window-local` options.