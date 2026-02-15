---
title: Prevent Hugging Face Spaces from Sleeping with GitHub Actions + agent-browser
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/0xkoji/prevent-hugging-face-spaces-from-sleeping-with-github-actions-agent-browser-2p4f
image: ""
tags: [huggingface, github-actions, automation, playwright, devops]
---

Hugging Face Spaces go to sleep after 48 hours of inactivity, causing cold-start delays for demos and automation tools. This article shows how to use a daily GitHub Actions workflow with agent-browser (a Playwright-based headless browser CLI) to visit and screenshot the Space, simultaneously preventing sleep and providing visual uptime monitoring via Discord. The setup gives you real browser access confirmation rather than a simple HTTP ping.
