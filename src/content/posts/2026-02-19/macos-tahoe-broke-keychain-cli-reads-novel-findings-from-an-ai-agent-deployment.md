---
title: "macOS Tahoe Broke Keychain CLI Reads: Novel Findings from an AI Agent Deployment"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/euda1mon1a/macos-tahoe-broke-keychain-cli-reads-novel-findings-from-an-ai-agent-deployment-2p3o
image: ""
tags: [macos, security, keychain, devops, ai-agents]
---

macOS Tahoe 26.x has a regression in the `security` CLI tool causing keychain reads to hang indefinitely or fail with exit code 36, breaking automated scripts and cron jobs that relied on `security find-generic-password`. Discovered while running a 24/7 AI agent deployment with 12+ API keys, the post documents five distinct regressions including a novel finding that keychain ACLs are bound to specific binary paths, meaning different Python versions can't read each other's stored secrets. Workaround: use Python's `keyring` library which bypasses the broken CLI entirely via direct C API calls.
