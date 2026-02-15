---
title: "Building my first MCP server: teaching AI assistants about backups"
date: 2026-02-15
time: "00:00"
source: DEV Community
link: https://dev.to/edeckers/building-my-first-mcp-server-teaching-ai-assistants-about-backups-21g5
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2xhn1i1qjbfbce1gmz1p.webp
tags: [mcp, ai, backup, bareos, json-rpc]
---

A developer built an MCP (Model Context Protocol) server connecting AI assistants like Claude to Bareos backup infrastructure, enabling conversational queries like "why did last night's backup fail?" instead of manual bconsole commands. The MCP protocol uses JSON-RPC over stdin/stdout with three core operations: initialize, list tools, and call tool. The resulting open-source bareos-mcp-server demonstrates practical AI integration with existing infrastructure management tooling.
