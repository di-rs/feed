---
title: "Introducing muxtree: Dead-Simple Worktree + Tmux Sessions for AI Coding"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/b-d055/introducing-muxtree-dead-simple-worktree-tmux-sessions-for-ai-coding-2kf2
image: ""
tags: [developer-tools, tmux, git, ai-coding, cli, workflow]
---

muxtree is a single bash script that pairs git worktrees with tmux sessions, letting you run multiple AI agents (Claude Code, Codex) in isolated environments without complex orchestration. One command creates a worktree, copies your config files, and opens a tmux session with separate dev and agent windows. Sessions persist across terminal restarts, and you can SSH in from another device to pick up exactly where you left off.
