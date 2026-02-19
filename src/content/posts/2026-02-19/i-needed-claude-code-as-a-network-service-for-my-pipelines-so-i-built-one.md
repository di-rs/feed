---
title: I needed Claude Code as a network service for my pipelines. So I built one.
date: 2026-02-19
time: "00:00"
source: DEV Community
link: https://dev.to/rootic/i-needed-claude-code-as-a-network-service-for-my-pipelines-so-i-built-one-18o9
image: ""
tags: [claude-code, fastapi, ci-cd, automation, security]
---

A developer built Claude Code API Server, a FastAPI wrapper around Anthropic's Claude Agent SDK that exposes it as a REST service for CI/CD pipelines, webhook automations, and security scanners — including process-level sandboxing via bwrap to guard against prompt injection. The workflow is simple: upload a ZIP, submit a job with a prompt, poll for results, enabling multiple clients to use Claude Code over HTTP without needing TTY access.
