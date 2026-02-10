---
title: "Why Nothing Really Gets Deleted Immediately: How Database Deletion Works Through Tombstones, LSM-Trees, and Compaction"
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/faizanfirdousi/why-nothing-really-gets-deleted-immediately-how-database-deletion-works-through-tombstones-2n8m
image: ""
tags: [database, lsm-tree, nosql, internals, performance]
---

Modern NoSQL and NewSQL databases based on LSM-trees use append-only structures, meaning deletions aren't immediate erasures but rather "tombstone" markers that flag data as deleted until compaction removes it. The append-only design exists because sequential writes are orders of magnitude faster than random writes on disk — and the immutability also simplifies concurrency, crash recovery, and versioning. The article walks through how data flows from MemTable to Write-Ahead Log to SSTables and how compaction eventually reclaims space.
