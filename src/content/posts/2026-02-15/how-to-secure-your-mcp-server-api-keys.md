---
title: How to Secure Your MCP Server's API Keys (With Working Demo)
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/lucamorettibuilds/how-to-secure-your-mcp-servers-api-keys-with-working-demo-192l
image: ""
tags: [mcp, security, api-keys, encryption, developer-tools]
---

Most MCP servers store API keys as plaintext in JSON config files — a ticking time bomb that could easily end up committed to git. This post demonstrates using Janee, an AES-256-GCM encrypted vault, to decrypt secrets only at runtime so no plaintext credentials ever touch disk. A thin helper calls `janee get` on demand, keeping MCP server config clean while protecting GitHub tokens and OpenAI keys with military-grade encryption.
