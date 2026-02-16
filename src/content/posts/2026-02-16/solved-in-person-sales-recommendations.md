---
title: "Solved: In-Person Sales Recommendations"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/techresolve/solved-in-person-sales-recommendations-1i3l
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1759771963617-e451d02011d4%3Fw%3D1600%26h%3D480%26fit%3Dcrop%26crop%3Dentropy
tags: [caching, devops, redis, varnish, architecture]
---

A DevOps war story about stale Varnish cache silently serving discontinued product recommendations during a live sales conference, nearly tanking a multi-million dollar deal. The fix evolved from manual cache purging to URL versioning for zero-purge deployments, then to an event-driven Redis Pub/Sub architecture for real-time, granular cache invalidation across distributed systems.
