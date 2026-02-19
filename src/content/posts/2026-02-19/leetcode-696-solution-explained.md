---
title: Leetcode 696 Solution Explained
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/mahua_vaidya221030396_46/leetcode-696-solution-explained-3425
image: ""
tags: [leetcode, algorithms, problem-solving, strings]
---

LeetCode 696 ("Count Binary Substrings") asks you to count substrings that have equal consecutive groups of 0s and 1s, such as "0011" or "10". The standard solution uses a linear scan to track the count of the current group and the previous group, adding min(prev, curr) to the result at each group boundary. This O(n) approach avoids nested loops and runs in a single pass through the string.
