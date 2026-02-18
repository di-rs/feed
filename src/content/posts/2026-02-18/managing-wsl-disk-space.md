---
title: Managing WSL Disk Space
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/octasoft-ltd/managing-wsl-disk-space-fm9
image: ""
tags: [wsl, windows, linux, disk-space, devops]
---

WSL2 virtual hard disk files (VHDX) grow as you use your Linux environment but never automatically shrink when files are deleted — meaning deleting 20GB inside your distro won't free any space on Windows. The article explains the root cause (VHDX files maintain allocated size even after internal Linux space is freed) and provides methods to compact them using wsl --manage or Hyper-V disk compaction tools. Regular compaction is essential for developers who build and delete large projects inside WSL over time.
