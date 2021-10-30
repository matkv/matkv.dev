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

## Basic usage

I can open a file by just typing `nvim filename` in the console. To move around in the file I can use the h,j,k,l keys or just the arrow keys. `:q` (shift+colon and then q) to close a file `:w` to save it.

It is also possible to open a folder with nvim. Then the files and folders inside it will be shown as a list and I can enter the folders or files with the enter key.

With `shift + w` I can jump to the next word, with a upper case `W` I can jump to the next word delimited by spaces. By using the same combination with `e` instead, we can jump to the end of each word. And `shift + b` jumps back one word instead of forward.
