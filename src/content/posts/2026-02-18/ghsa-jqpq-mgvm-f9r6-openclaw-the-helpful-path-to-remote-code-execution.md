---
title: 'GHSA-JQPQ-MGVM-F9R6: OpenClaw: The "Helpful" Path to Remote Code Execution'
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/cverports/ghsa-jqpq-mgvm-f9r6-openclaw-the-helpful-path-to-remote-code-execution-1hoa
image: ""
tags: [security, vulnerability, cve, rce, path-hijacking]
---

OpenClaw versions prior to v2026.2.14 had a critical security flaw (CVSS 7.8) that allowed Local Privilege Escalation and Remote Code Execution via PATH manipulation — the platform trusted local node_modules binaries over system executables and let external agents override the PATH environment variable. Attackers could hijack commands to execute arbitrary code via binary replacement. The fix is available in v2026.2.14; users should upgrade immediately, disable OPENCLAW_ALLOW_PROJECT_LOCAL_BIN unless strictly necessary, and audit configuration files for unsafe environment variable overrides.
