---
title: "Building High-Availability Failover: 90-Second Auto-Takeover"
date: 2026-02-18
time: "00:00"
source: DEV Community
link: https://dev.to/linou518/building-high-availability-failover-90-second-auto-takeover-33ao
image: ""
tags: [high-availability, failover, bash, systemd, devops, openclaw]
---

A simple but effective HA setup using a bash monitoring script on a backup PC that checks the primary node every 30 seconds and triggers a takeover after 3 consecutive failures (~65-90 seconds total). Key lessons include using port checks (`ss -tlnp`) instead of `pgrep -f` to avoid false positives, and keeping the monitor and gateway services independent in systemd to prevent cascade stops. The author embraces the "imperfect but sufficient" philosophy for personal infrastructure.
