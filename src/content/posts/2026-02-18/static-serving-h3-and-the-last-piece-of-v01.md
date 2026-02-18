---
title: Static Serving, H3, and the Last Piece of v0.1
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/mdreal32/static-serving-h3-and-the-last-piece-of-v01-3iea
image: ""
tags: [h3, unjs, node, http, web-framework]
---

The Velnora Host project now serves static files from `src/` using H3 — the UnJS HTTP framework — which replaces familiar Express patterns with an event-based model where you return responses instead of calling `res.send()`. The author details how switching mental models from Express to H3 led to cleaner code and natural middleware composition, with static serving now available as a baseline for all workspace projects with zero config.
