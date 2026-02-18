---
title: Using Claude Code as a Free LLM Backend for Voice Agent Testing
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/pld/using-claude-code-as-a-free-llm-backend-for-voice-agent-testing-40bg
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fulmjvybn19djo6wpmmmy.gif
tags: [claude, ai, voice-agent, testing, llm, claude-code]
---

The `voicetest` tool can route all LLM inference through Claude Code's CLI instead of paid API keys, letting Claude Pro/Max subscribers run multi-turn voice agent test suites (200+ calls per suite) against their subscription quota at no extra cost. Configuration is as simple as setting model strings like `claudecode/sonnet` in a `settings.toml` file, supporting haiku, sonnet, and opus variants. No proxy server or API key management required — just the `claude` binary on your PATH.
