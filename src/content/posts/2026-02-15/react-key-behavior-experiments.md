---
title: React Key Behavior Experiments
date: 2026-02-15
time: "00:00"
source: DEV Community
link: https://dev.to/algoorgoal/micin-react-key-4ogo
image: ""
tags: [react, javascript, performance, rendering, react-memo]
---

This Korean-language article experimentally explores how React's `key` prop behavior differs between using item values vs. array indexes, particularly when combined with `React.memo`. When prepending to an array with item-based keys and memo, only the new items re-render — but with index-based keys, all items re-render because React can't distinguish stable identity. The experiments reveal that choosing the right key strategy directly impacts rendering performance and can cause subtle bugs when array order changes.
