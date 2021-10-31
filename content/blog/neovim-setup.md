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

**TO-DO**

* Install some plugin to show a file tree on the left side

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

### Editing text

By hitting the `i` key, we enter insert mode. Now we can actually add and change text. With the command `:u` we can undo the last change we made.

### Splitting the window

I can split the current window verticall by using the `:vs` command. This opens another vertical window to the right. The `:split` command would open one below. In order to move around between all open windows we can use the `:W w` command (colon W and then w). This cycles through all currently open windows. To close the currently open window I can use the normal `:q` command.

## Using a plugin manager - packer

I created a new folder in my nvim folder called "lua" and a "plugins" folder in the new lua folder and a new file called `init.lua`. (I actually created it in my dotfiles repo and symlinked it to the actual config folder again).

So after creating the folder and file in the actual config folder I ran the command:

```
ln -s -f ~/dotfiles/nvim/lua/plugins/init.lua ~/.config/nvim/lua/plugins/init.lua
```

Now the file in my dotfiles repository is symlinked to the actual config file again.

Then I cloned the repository of the packer plugin manager:

```
git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim
```

Now we add the first plugin to the `init.lua` file in the plugins directory:

```
return require('packer').startup(function()
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'
end)
```

I think this actually means that the plugin manager is basically adding itself as a plugin too. Now we have to reference this plugins folder in the actual `init.lua` file in the "root" directory (~/.config/nvim/init.lua)

In the initi.lua file:

```
require('plugins')
```

Now we open the `init.lua` file (in the actual config folder) in nvim and run the command (shift + colon) `PackerInstall`.

### Installing a color scheme

In the plugins folder we add a reference to the github repository that holds the color scheme. In my case I will be using the "Nord" color scheme:

```
return require('packer').startup(function()
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'
    
    -- Nord color scheme
    use 'shaunsingh/nord.nvim'
end)
```

And then we run `PackerInstall` again. Then in the normal init.lua file we need to set the color scheme:

```
vim.cmd('colorscheme nord')
```

After saving the file and opening nvim again, we should now **see the new color scheme** :)

### Adding better syntax highlighting using treesitter

In the `init.vim` file in the plugins folder we add

```
    use {
        'nvim-treesitter/nvim-treesitter',
        run = ':TSUpdate'
    }
```

And then we install the treesitter plugin using the `PackerSync` command.

### Adding treesitter support for specific languages

We add a reference to the treesitter config in the normal `lua.init`:

```
require('treesitter-config')
```

This basically means that the `init.lua` file will require any plugins/settings that are in `init.lua` files in the directories that are specified this way.

Then we create this `treesitter-config` folder in the `lua` folder. And in this new folder we create a new `init.lua` file. Now we can basically enable all languages that are "maintained" and supported by treesitter:

```
require'nvim-treesitter.configs'.setup {
  ensure_installed = "maintained",
  highlight = {
    enable = true,              -- false will disable the whole extension
    additional_vim_regex_highlighting = false,
  },
}
```

The next time we open nvim, it will automatically download and install all languages that are supported. Now the syntax highlighting should look a lot better when opening code.
