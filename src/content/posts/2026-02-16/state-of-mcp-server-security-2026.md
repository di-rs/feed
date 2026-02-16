---
title: "The State of MCP Server Security in 2026 — 118 Findings Across 68 Packages"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/ecap0/the-state-of-mcp-server-security-in-2026-118-findings-across-68-packages-4fkd
image: ""
tags: [security, mcp, ai-agents, npm, vulnerabilities, audit]
---
AgentAudit audited 194 packages in the MCP/AI agent ecosystem and found 118 security findings, including 5 critical and 9 high severity issues — though 192 of 194 packages scored as "safe" with an average Trust Score of 98/100. The most dangerous patterns include unsanitized input passed to shell commands (enabling remote code execution), environment variable leakage of API keys into LLM context, and overly broad filesystem access. Despite the high average score, the few outliers represent real, exploitable vulnerabilities that developers should watch for.
