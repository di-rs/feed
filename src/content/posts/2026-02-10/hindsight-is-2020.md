---
title: Hindsight is 20/20
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/needham/hindsight-is-2020-13oo
image: ""
tags: [programming, debugging, c, algorithms, learning, edge-cases]
---

A developer shares a common programming mistake: a function to find the longest increasing sequence in an array failed edge cases where no increasing sequence existed, returning 0 instead of 1. The bug was caught during grading when thorough testing revealed max wasn't updated if the for loop's condition never triggered.
