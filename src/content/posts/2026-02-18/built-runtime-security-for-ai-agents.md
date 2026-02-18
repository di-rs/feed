---
title: Built runtime security for AI agents
date: 2026-02-18
time: 00:00
source: DEV Community
link: "https://dev.to/mlnas/built-runtime-security-for-ai-agents-576h"
image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffdn8slntmnnjzjs8onqv.png"
tags: [ai-agents, security, open-source, runtime, langchain]
---

Agent-SPM is an open-source (MIT) security layer that enforces runtime policies on AI agent actions, acting like a firewall for agent behavior before execution occurs. It prevents data leaks (detecting SSNs, API keys in tool arguments), stops unauthorized actions, enables human oversight for high-risk operations, and creates automatic audit trails for compliance. Built to work with any LLM framework—LangChain, CrewAI, Claude—it runs in-process with zero infrastructure overhead via 8 composable packages.
