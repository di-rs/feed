---
title: Oracle AI Database 26ai — Managing AWR in Active Data Guard
date: 2026-02-09
time: "00:00"
source: DEV Community
link: https://dev.to/vahidusefzadeh/oracle-ai-database-26ai-managing-awr-in-active-data-guard-5f6n
image: ""
tags: [oracle, database, awr, active-data-guard, oracle-26ai, dba]
---

Oracle AI Database 26ai brings fully integrated AWR support for Active Data Guard standby databases, enabled by default with automatic snapshot collection and transparent transport to the primary database. This eliminates the complex Remote Management Framework configuration required in 12.2+, allowing DBAs to work with AWR on standby databases as easily as on primary—including generating reports using awrrpt.sql, modifying snapshot intervals and retention settings, and creating manual snapshots—with each standby assigned a unique AWR ID for data distinction.
