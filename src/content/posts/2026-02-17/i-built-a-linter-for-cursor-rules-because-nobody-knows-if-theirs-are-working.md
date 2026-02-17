---
title: I Built a Linter for Cursor Rules (Because Nobody Knows If Theirs Are Working)
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/nedcodes/i-built-a-linter-for-cursor-rules-because-nobody-knows-if-theirs-are-working-4f6h
image: ""
tags: [cursor, ai, developer-tools, linting, cli]
---

cursor-lint is a zero-config CLI tool (npx cursor-lint) that validates Cursor rules files and catches the common failure modes: using legacy .cursorrules format that agent mode ignores, missing alwaysApply: true in .mdc frontmatter, and vague rules that the model won't follow. It exits with code 1 on errors, making it CI-compatible for teams who want to enforce working AI configuration.
