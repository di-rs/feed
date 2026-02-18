---
title: "Field Report: The Never-ending \"Preparing to Sync\" Loop"
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/deltazero/field-report-the-never-ending-preparing-to-sync-loop-c7
image: ""
tags: [macos, debugging, cloud-storage, troubleshooting, apfs]
---

A developer troubleshoots a macOS cloud backup app stuck in an infinite "Preparing to Sync" loop after a Sequoia upgrade, working through cache clears, Full Disk Access permission toggles, and account reconnections before finding the real culprit via Console logs: a hidden symbolic link from a dev tool that the sync engine silently failed to resolve. The fix involved understanding how macOS handles APFS snapshots and excluding the problematic directory from sync scope. The article is a useful case study in how modern macOS security layers cause sync tools to fail without surfacing meaningful error messages.
