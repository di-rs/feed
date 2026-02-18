---
title: "Claude Code's CLAUDE.md Hierarchy — Lessons from 10 Days of Misconfiguration"
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/shimo4228/claude-codes-claudemd-hierarchy-lessons-from-10-days-of-misconfiguration-1afa
image: ""
tags: [claude-code, configuration, ai, developer-tools, best-practices]
---

After 10 days of accidentally placing all ECC templates at the workspace level, causing Zenn writing skills to load in iOS projects and Python rules to apply to Swift code, the author clarifies Claude Code's three-layer config hierarchy: user-level (~/.claude/) for universal rules, workspace-level for local settings overrides only, and project-level for project-specific skills and agents. Rules, skills, and agents are additively merged across all levels, while settings values follow lowest-wins precedence. Getting this hierarchy right is essential for large multi-project workspaces.
