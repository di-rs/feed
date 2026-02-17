---
title: Subagents and Web Search in Claude Code
date: 2026-02-17
time: "00:00"
source: DEV Community
link: https://dev.to/twisterrl/subagents-and-web-search-in-claude-code-15il
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgnfhrux3cpf65t89bm4k.png
tags: [claude, ollama, subagents, web-search, ai-agents]
---

Ollama now supports subagents and built-in web search within Claude Code, requiring no MCP servers or API keys. Subagents can run parallel tasks like file exploration, code tracing, and research — each in their own isolated context — and models like minimax-m2.5, glm-5, and kimi-k2.5 will trigger them naturally or on explicit prompting. When a model needs current information, Ollama handles web search internally and returns results directly, enabling multi-agent research workflows with zero additional configuration.
