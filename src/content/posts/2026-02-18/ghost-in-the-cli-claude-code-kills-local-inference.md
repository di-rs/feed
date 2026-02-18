---
title: "The Ghost in the CLI: Why Claude Code Kills Local Inference"
date: 2026-02-18
time: "00:00"
source: DEV Community
link: https://dev.to/mfolsom/the-ghost-in-the-cli-why-claude-code-kills-local-inference-dfc
image: ""
tags: [claude-code, local-llm, open-source, llama-cpp, ai-tools]
---

Pointing Claude Code at a local base URL (via ANTHROPIC_BASE_URL) for local inference with llama.cpp results in immediate segfaults — the integration is fundamentally broken for local models. Despite Claude Code's growing support for open-source models, it's optimized for cloud-hosted versions, not local quantized GGUFs running on llama-server. The author's technical investigation reveals the specific incompatibilities and why this "poltergeist in your terminal" appears.
