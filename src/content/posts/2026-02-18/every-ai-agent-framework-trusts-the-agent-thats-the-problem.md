---
title: "Every AI Agent Framework Trusts the Agent. That's the Problem."
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/saezbaldo/every-ai-agent-framework-trusts-the-agent-thats-the-problem-5gfa
image: ""
tags: [AI, security, agents, authorization, infrastructure, LangChain]
---

Every major AI agent framework — LangChain, AutoGen, CrewAI, OpenAI Function Calling, Anthropic Tool Use — implicitly trusts the agent and relies on output filtering rather than proper authorization models. Output validation checks whether content is safe, but not whether the agent has the authority, budget, or multi-party approval to take a specific action — a fundamentally different question. The author argues AI infrastructure needs threshold authorization, consumable budget tokens, and formal verification of safety properties to prevent well-formatted but unauthorized actions like transferring funds to the wrong account.
