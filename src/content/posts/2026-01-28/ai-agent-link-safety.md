---
title: "Keeping your data safe when an AI agent clicks a link"
date: "2026-01-28"
time: "00:00"
source: "OpenAI Blog"
link: "https://openai.com/index/ai-agent-link-safety"
image: ""
tags: [security, URL-safety, data-exfiltration, privacy, ChatGPT]
---

OpenAI details how ChatGPT prevents URL-based data exfiltration by verifying links against an independent web index before automatic retrieval. The system only auto-loads URLs previously observed publicly on the open web, showing warnings for unverified links that could contain user-specific data, as part of a broader defense-in-depth strategy against prompt injection attacks.
