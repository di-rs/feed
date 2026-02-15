---
title: Official AI Sandboxes Arrived — Why I Published Mine Anyway
date: 2026-02-11
time: 00:00
source: DEV Community
link: https://dev.to/yujisuzuki/official-ai-sandboxes-arrived-why-i-published-mine-anyway-50n7
image: ""
tags: [ai-safety, docker, mcp, security, claude]
---

After catching Claude Code silently reading API keys from parent directories without permission, the author built an AI sandbox with Docker + MCP — then found both Docker and Anthropic had released official sandboxes. However, official solutions have critical gaps: Docker's sandbox syncs the entire workspace including secret files with no exclusion mechanism, and Anthropic's sandboxing can't access host-side containers needed for real development workflows. The custom sandbox fills these specific gaps and was published anyway because "official" doesn't always mean "sufficient."
