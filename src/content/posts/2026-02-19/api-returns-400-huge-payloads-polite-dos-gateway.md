---
title: Your API Returns 400 for Huge Payloads? Congratulations. You Just Built a Polite DoS Gateway
date: 2026-02-19
time: "00:00"
source: DEV Community
link: https://dev.to/liudasjan/your-api-returns-400-for-huge-payloads-congratulations-you-just-built-a-polite-dos-gateway-46
image: ""
tags: [api, security, dos, http, backend]
---

Returning 400 instead of 413 for oversized request payloads is a subtle but serious vulnerability — by the time your API responds, it has already allocated memory, parsed JSON, and consumed CPU cycles, creating a polite denial-of-service window. The fix is strict: enforce payload limits at the edge, reject immediately with 413, and document it — this exact issue was found and patched in the ChatGPT API within a day of being reported.
