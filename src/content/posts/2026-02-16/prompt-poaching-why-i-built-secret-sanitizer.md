---
title: "Prompt Poaching: Why I Built Secret Sanitizer"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/souvikghosh957/prompt-poaching-why-i-built-secret-sanitizer-4g32
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bphqsy7m6lwumvygps2v.png
tags: [security, privacy, ai, chrome-extension, open-source]
---

After accidentally pasting AWS keys into ChatGPT and later learning that Chrome extensions with millions of users were harvesting AI conversations (dubbed "Prompt Poaching"), the author built Secret Sanitizer—an open-source Chrome extension that intercepts pastes and masks secrets locally before they reach any AI chat. It detects API keys, passwords, bearer tokens, JWTs, and more using local regex patterns, replacing them with [MASKED] while storing originals in an encrypted vault. The extension works across ChatGPT, Claude, Gemini, Grok, Perplexity, DeepSeek, and custom sites.
