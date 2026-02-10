---
title: "Speculation Rules API: Make Your Pages Load Before the User Clicks"
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/andresclua/speculation-rules-api-make-your-pages-load-before-the-user-clicks-3498
image: ""
tags: [web-performance, browser-api, javascript, prefetch, prerender]
---

The Speculation Rules API is a native browser feature that lets you preload or fully prerender pages before users click on them, resulting in near-instant navigation. It requires only a `<script type="speculationrules">` tag with JSON rules — no NPM, no frameworks. You can target specific URLs or let the browser auto-decide based on links found in the document, with configurable eagerness levels to balance performance and resource usage.
