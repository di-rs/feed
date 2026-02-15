---
title: "Beyond rate limits: scaling access to Codex and Sora"
date: 2026-02-13
time: "00:00"
source: OpenAI Blog
link: https://openai.com/index/beyond-rate-limits
image: ""
tags: [openai, codex, sora, rate-limits, infrastructure]
---

OpenAI has built a real-time access engine for Codex and Sora that blends traditional rate limits with a credit-based system, allowing users to continue using products after hitting their limits by spending credits. The system functions as a "decision waterfall" — enforcing rate limits first, then seamlessly transitioning to credits within the same request — without introducing billing lag or overages. This hybrid approach solves the problem of balancing fair access, demand smoothing, and user experience for rapidly-adopted AI products.
