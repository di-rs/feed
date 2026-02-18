---
title: "Scaling From 3 Cinemas to 240 Venues: What Broke and What Evolved"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/alistairjcbrown/scaling-from-3-cinemas-to-240-venues-what-broke-and-what-evolved-2jkk
image: ""
tags: [architecture, scraping, scalability, raspberry-pi, data-engineering, python]
---

A developer shares hard-won lessons from scaling a cinema listings scraper from 3 venues to 240+, running across GitHub Actions and a cluster of 6 Raspberry Pis. The key architectural insight was enforcing a strict retrieve/transform split: retrieve handles all network calls and builds full data bundles, while transform is a guaranteed pure function with zero network calls—making it testable, cacheable, and replayable against historical snapshots. This separation of concerns, born from necessity rather than upfront planning, solved the cascading debugging, caching, and testing problems that only appear at scale.
