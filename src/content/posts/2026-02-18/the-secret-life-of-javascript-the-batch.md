---
title: "The Secret Life of JavaScript: The Batch"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/aaron_rose_0787cc8b4775a0/the-secret-life-of-javascript-the-batch-1i0d
image: ""
tags: [javascript, async-generators, performance, streaming, optimization]
---

Using async generators to stream data one item at a time incurs significant CPU overhead from thousands of yield handshakes — each requiring JavaScript to pause, save state, and resume. The solution is batch yielding: instead of yielding individual items, yield entire pages/arrays at once, reducing the handshake overhead by up to 100× while preserving the memory benefits of streaming.
