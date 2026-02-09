---
title: "Scaling PostgreSQL to power 800 million ChatGPT users"
date: "2026-01-22"
time: "00:00"
source: "OpenAI Blog"
link: "https://openai.com/index/scaling-postgresql"
image: ""
tags: [PostgreSQL, infrastructure, scaling, database, Azure]
---

OpenAI shares how they scaled Azure PostgreSQL to handle millions of QPS with a single-primary architecture and nearly 50 read replicas for 800 million ChatGPT users, achieving 10x load growth in a year. Through extensive optimizations including query improvements, workload isolation, PgBouncer connection pooling, cache locking, and rate limiting, they maintain low double-digit millisecond p99 latency with five-nines availability.
