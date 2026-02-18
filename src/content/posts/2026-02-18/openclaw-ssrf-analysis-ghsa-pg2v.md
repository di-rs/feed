---
title: "GHSA-PG2V-8XWH-QHCC: The Call Is Coming From Inside the House: OpenClaw SSRF Analysis"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/cverports/ghsa-pg2v-8xwh-qhcc-the-call-is-coming-from-inside-the-house-openclaw-ssrf-analysis-1pni
image: ""
tags: [security, ssrf, vulnerability, openclaw, web-security, cve]
---

A medium-severity SSRF vulnerability (CVSS 6.5) was disclosed in OpenClaw's Tlon/Urbit extension, where unsanitized user-supplied ship URLs allowed authenticated attackers to proxy requests to localhost or cloud metadata services like AWS's 169.254.169.254. Fixed in version 2026.2.14 with a strict SSRF guard and URL validator replacing the raw `fetch` call. Mitigations include disabling the Tlon extension, adding egress firewall rules, and running OpenClaw with least-privilege IAM roles.
