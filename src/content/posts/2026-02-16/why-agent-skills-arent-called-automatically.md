---
title: "Why Agent Skills Aren't Called automatically: An Anti-Pattern in Agent Skill"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/taki4416/why-agent-skills-arent-called-automatically-an-anti-pattern-in-agent-skill-88g
image: ""
tags: [ai-agents, claude, skills, anti-pattern, llm]
---

An exploration of why AI agent skills don't get invoked automatically as expected—a single context can map to multiple skills ambiguously, and spec-driven planning doesn't reason over the available skill space when scoping file exploration. The author found that explicitly calling skills (e.g. /planner) is far more reliable than expecting the model to discover and invoke the right skill implicitly. The key lesson: project-specific behavior belongs in the spec, not encoded in skills.
