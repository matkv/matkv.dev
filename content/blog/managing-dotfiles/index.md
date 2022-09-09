---
title: "Managing dotfiles"
type: "blog"
date: 2022-09-09T18:00:00+02:00
---

I finally got around to setting up a way to manage my dotfiles - using a Git bare repository. This blog post a tutorial for future reference in order to be able to replicate this setup on a different computer.

<!--more-->

I mainly followed [this](https://www.atlassian.com/git/tutorials/dotfiles) tutorial from Bitbucket & [another one](https://www.ackama.com/what-we-think/the-best-way-to-store-your-dotfiles-a-bare-git-repository-explained/) that goes a bit more into detail.

In these tutorials, they're using **.cfg** as the folder name for the dotfiles repository and **config** as the alias for the git command that will interact specifically with this repo.

For me it made more sense to call both the command and the directory simply **dotfiles** so the command snippets here will use my personal naming scheme.

### Initial setup

```bash
# create bare repo
git init --bare $HOME/.dotfiles
cd .dotfiles/
git branch -m main  # renamed master to main

# create alias called 'dotfiles' (acts as the 'git')
alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
dotfiles config --local status.showUntrackedFiles no

# add alias to .bashrc (can also be done by hand)
echo "alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> $HOME/.bashrc
```

I also added my dotfiles repository on GitHub as the remote repo.

```bash
dotfiles remote add origin https://github.com/matkv/dotfiles
dotfiles pull origin main
dotfiles push --set-upstream origin main
```

Now, any file within the home folder can be versioned with normal commands, using **dotfiles** instead of the normal **git** command:

```bash
# example of adding my Visual Studio code config
cd .config/Code/User # settings.json is located here
dotfiles add settings.json
doftiles commit -m 'added VS Code config'
dotfiles push
```

### Viewing all currently tracked files

If I want to see all the files that I'm currently tracking in my bare repository, I can use this command:

```bash
dotfiles ls-tree --full-tree -r HEAD
```

### Setting up this existing repository on a new system

- make sure that the alias is set up in the **.bashrc** file
  - `echo "alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> $HOME/`
- add the dotfiles repository (that hasn't been cloned yet) to the **.gitignore** file in the home directory
  - `echo ".dotfiles" >> .gitignore`
- clone the actual repository from GitHub
  - `git clone --bare <git-repo-url> $HOME/.dotfiles`
- define the alias in the current shell scope
  - `alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'`
- checkout the actual content from the bare repository
  - `dotfiles checkout`
  - this step might fail because some files (for exampe .gitignore) already exist - these have to be backed up & removed so this might need a little bit of tinkering
- set the `showUntrackedFiles` to no again for this repository
  - `dotfiles config --local status.showUntrackedFiles no`

Now it should be possible to use the **dotfiles** command again to interact with the dotfiles repository :)

### Next steps

Now that this is set up, I want to only add files to this repository that actually have some custom stuff that was changed by me personally. If a config file is still exactly the same way it was after I installed Manjaro, I don't really see why I should track it.

I also want to clean up my **.bashrc** file before commiting because there's a suprising amount of weird stuff in there already.

But all in all I'm pretty happy with the result, now I can finally start tidying up all my config files.
