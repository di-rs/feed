---
title: "GhostTrace: Capture \"Phantom Branches\" to Debug Rejected Decisions in AI Agents"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/ahmedallam222/ghosttrace-capture-phantom-branches-to-debug-rejected-decisions-in-ai-agents-2pf
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nvd4317vowb62srn3hqx.png
tags: [ai-agents, debugging, python, llm, opensource]
---

GhostTrace is a Python tool that captures the "phantom branches" of AI agent decisions — the actions an agent considered but rejected — saving full reasoning for each rejection to a `.ghost.json` file that can be replayed and inspected later. It's framework-agnostic and installable via pip, offering a simple `record`/`replay` CLI that makes it easy to understand why an agent chose one path over another.
