---
title: Setting Up textlint + markdownlint Hooks for Zenn Writing with Claude Code
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/shimo4228/setting-up-textlint-markdownlint-hooks-for-zenn-writing-with-claude-code-g4b
image: ""
tags: [zenn, textlint, markdownlint, claude-code, linting, git-hooks]
---

After accumulating 28 linting errors across three Zenn articles written with Claude Code, the author set up pre-commit hooks using husky and lint-staged to automatically enforce textlint (with the Japanese technical writing preset and prh terminology consistency) and markdownlint on every commit. The configuration only lints staged .md files, keeping CI fast, and supports selective rule disabling via inline comments for intentional style breaks. This automation catches full-width space contamination, skipped heading levels, and broken links before they reach production.
