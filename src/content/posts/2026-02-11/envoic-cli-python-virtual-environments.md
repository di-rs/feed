---
title: "envoic: A CLI to Find and Clean Python Virtual Environments"
date: 2026-02-11
time: 00:00
source: DEV Community
link: https://dev.to/mahimairaja/envoic-a-cli-to-find-and-clean-python-virtual-environments-40f
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0l7qp7475qeobxhkwrl2.png
tags: [python, cli, developer-tools, virtualenv, disk-management, productivity]
---

envoic is a terminal-first Python CLI that scans directories to discover venv, virtualenv, and conda environments, reporting their size, age, Python version, and stale status — then offers interactive cleanup workflows via `envoic manage` and `envoic clean`. The latest release adds checkbox-based environment selection with stale-only preselection, deep metadata mode, and an explicit destructive confirmation flow to prevent accidents. Zero install needed via `uvx envoic scan .`, making it a quick win for developers drowning in forgotten `.venv` folders.
