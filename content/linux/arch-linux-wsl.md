+++
title = "Arch Linux WSL"
description = "Info for setting up Arch Linux on WSL"
index_entry = true
section_path = "/linux"
+++

## Installation guide

- [Install Arch Linux on WSL](https://wiki.archlinux.org/title/Install_Arch_Linux_on_WSL)
## Disable WSL interop

To prevent issues caused by having the Windows `$PATH` in the WSL environment, we can disable that functionality.

In particular, this solves a problem I had where the `utils` binary - when installing it on Windows - was loaded into `$PATH` *before* the `utils` binary from `~/.go/bin`. This made it impossible to run the `utils` binary from `~/.go/bin` because the Windows version was always loaded first.

To disable WSL interop, add the following to your `/etc/wsl.conf` file:

```ini
[interop]
appendWindowsPath = false
```

**Important: Restart WSL** before trying to use, for example, node. Otherwise it will try to the node instance on Windows. After restarting WSL , the Windows `$PATH` will no longer be appended to the WSL environment.

However, this also means that we cannot run Windows executables directly from WSL anymore. So for example, `explorer.exe` or running `code` to open Visual Studio Code directly from WSL will not work anymore.

To make this work again, those executables need to be added to the WSL `$PATH` manually using their full path.