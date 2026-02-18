---
title: Using a Japanese Text Analysis MCP Server with Claude Code -- kuromoji.js
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/shimo4228/using-a-japanese-text-analysis-mcp-server-with-claude-code-kuromojijs-g92
image: ""
tags: [claude-code, mcp, japanese, nlp, text-analysis, kuromoji]
---

LLMs struggle with accurate Japanese character counts due to token boundary ambiguity, so this article shows how to integrate a kuromoji.js-powered MCP server into Claude Code for precise morphological analysis. The MCP server installs automatically via npx from GitHub with kuromoji's dictionary bundled, requiring no extra setup, and exposes tools for both file-based and inline text analysis. Once connected, Claude Code can answer accurate character count and readability questions directly within a conversation.
