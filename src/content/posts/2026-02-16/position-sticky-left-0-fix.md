---
title: "How to solve header `position: sticky; left: 0` not working"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/maxcore/how-to-solve-header-position-sticky-left-0-not-working-3mj
image: ""
tags: [css, sticky, html, layout, frontend]
---

When a sticky-positioned header fails to stay fixed horizontally, the culprit is usually the default `overflow` behavior on `html` and `body`. Setting `overflow-x: auto` and `height: 100%` on both elements restores the expected sticky behavior for headers that should remain pinned to the left edge. This one-liner fix resolves the common issue without needing JavaScript or complex workarounds.
