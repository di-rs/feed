---
title: "Unrolling the Codex agent loop"
date: "2026-01-23"
time: "00:00"
source: "OpenAI Blog"
link: "https://openai.com/index/unrolling-the-codex-agent-loop"
image: ""
tags: [Codex, agent-loop, Responses-API, architecture, prompt-caching]
---

OpenAI deep-dives into the Codex CLI agent loop that orchestrates user input, model inference, and tool execution via the Responses API. The post covers prompt construction, context management across turns, prompt caching optimization to avoid quadratic costs, conversation compaction to manage context windows, and how Codex maintains stateless requests while supporting Zero Data Retention customers.
