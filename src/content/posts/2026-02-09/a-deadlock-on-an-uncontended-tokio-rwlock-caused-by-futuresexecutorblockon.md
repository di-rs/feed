---
title: A deadlock on an uncontended Tokio RwLock (caused by futures::executor::block_on)
date: 2026-02-09
time: 00:00
source: DEV Community
link: https://dev.to/cspinetta/a-deadlock-on-an-uncontended-tokio-rwlock-caused-by-futuresexecutorblockon-490i
image: ""
tags: [rust, tokio, async, deadlock, concurrency]
---

A detailed analysis of a mysterious deadlock in Rust async code where an uncontended Tokio RwLock hangs on the third read. The issue stems from using futures::executor::block_on instead of Tokio's runtime, which causes cooperative scheduling yields to park threads indefinitely.
