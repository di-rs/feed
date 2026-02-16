---
title: "Schema Drift: The Silent MCP Attack Vector Nobody's Watching"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/ecap0/schema-drift-the-silent-mcp-attack-vector-nobodys-watching-8m5
image: ""
tags: [security, mcp, ai-agents, supply-chain, npm, llm-security]
---

Schema Drift refers to the gradual, invisible expansion of an MCP server's attack surface across version updates — where patch releases quietly add new tools or change parameter descriptions in ways that can grant full system access to AI agents. Since audits are point-in-time and auto-updates are the norm, a clean security review of v1.0.0 says nothing about v1.0.1 which may have added shell command execution. A scan of 17 popular MCP servers found multiple instances of capability expansion in patch versions and description changes that could subtly manipulate LLM behavior.
