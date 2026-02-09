---
title: What I Learned Building a Job Scheduler That Doesn't Trust Redis
date: 2026-02-09
time: 00:00
source: DEV Community
link: https://dev.to/blueberry_adii/what-i-learned-building-a-job-scheduler-that-doesnt-trust-redis-5fd1
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvx9tf07eq3i7jle5dvqw.png
tags: [go, redis, mysql, job-scheduler, distributed-systems, backend]
---

A developer shares lessons from building Tickr, a background job scheduler in Go that uses MySQL as the source of truth with Redis for coordination. The project evolved from v1's fragile assumptions and polling to v2's robust architecture handling Redis crashes, overdue jobs, and graceful shutdowns—teaching valuable lessons about state ownership and designing systems that recover instead of restart.
