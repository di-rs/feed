---
title: Moving WSL Distributions to Another Drive
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/octasoft-ltd/moving-wsl-distributions-to-another-drive-3id4
image: ""
tags: [wsl, windows, linux, devops, storage]
---

WSL2 distributions store their virtual hard disks (VHDX) on the C: drive by default, which becomes problematic when running multiple large distros consuming system drive space. The article explains how to locate distribution VHDX files via the Windows Registry or local app data paths, and walks through moving them to a different drive using WSL's export/import functionality. This is especially useful for developers running multiple distros like Ubuntu, Debian, or custom Linux configurations.
