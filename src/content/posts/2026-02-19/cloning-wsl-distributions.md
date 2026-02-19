---
title: Cloning WSL Distributions
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/octasoft-ltd/cloning-wsl-distributions-2l6
image: ""
tags: [wsl, linux, windows, devops, virtualization]
---

WSL doesn't have a built-in `--clone` command, but you can duplicate any distribution using `wsl --export` to create a tar snapshot and `wsl --import` to restore it under a new name. After importing, you'll need to fix the default user by editing `/etc/wsl.conf` since imported distros default to root login.
