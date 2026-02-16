---
title: "Stop Leaking Resources: How to Use AbortSignal in Playwright Tests"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/vitalicset/stop-leaking-resources-how-to-use-abortsignal-in-playwright-tests-jb2
image: ""
tags: [playwright, testing, javascript, abortsignal, async]
---

When Playwright tests timeout, in-flight HTTP requests continue running as "zombie" requests — causing connection pool exhaustion and cascading failures at scale. The `afterEach` hook can't help because it has no reference to those in-flight promises. The fix is integrating `AbortController`/`AbortSignal` via the `@playwright-labs/fixture-abort` package to cancel all async work when a test ends.
