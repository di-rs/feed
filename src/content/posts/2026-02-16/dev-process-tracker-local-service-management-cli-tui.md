---
title: "Dev Process Tracker: Local Service Management with a CLI + TUI"
date: 2026-02-16
time: "00:00"
source: DEV Community
link: https://dev.to/tawe/dev-process-tracker-local-service-management-with-a-cli-tui-9dm
image: ""
tags: [cli, devtools, developer-experience, process-management, tui, github-copilot]
---

Dev Process Tracker (devpt) is a local development service manager with both CLI and TUI interfaces that provides cross-stack runtime visibility, lifecycle control (start/stop/restart), and crash diagnostics in one tool. It uniquely tracks both "managed" services you explicitly define and "discovered" services listening on TCP ports — helping spot stale processes from other terminals instantly. Unlike PM2, Docker Compose, or Makefile targets, devpt focuses on the full local mixed-stack runtime inventory rather than any single execution model.
