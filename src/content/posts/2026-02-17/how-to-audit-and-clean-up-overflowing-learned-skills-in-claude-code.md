---
title: How to Audit and Clean Up Overflowing Learned Skills in Claude Code
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/shimo4228/how-to-audit-and-clean-up-overflowing-learned-skills-in-claude-code-38e1
image: ""
tags: [claude-code, ai, developer-tools, productivity, skills-management]
---

When using Claude Code's /learn command extensively, learned skills accumulate in ~/.claude/skills/learned/ and eventually overflow the Character Budget (~16,000 chars), causing useful skills to be silently truncated. The article provides a step-by-step audit: classify each skill as global vs. project-specific vs. re-derivable, move project-scoped skills into their respective .claude/skills/ directories, and disable unused templates with a frontmatter flag instead of deleting them. This keeps the skill discovery pool lean without permanently losing knowledge.
