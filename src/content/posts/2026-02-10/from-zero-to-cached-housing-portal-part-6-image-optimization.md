---
title: "From Zero to Cached: Building a High-Performance Housing Portal with Django, Next.js, and Redis - Part 6: Image Optimization"
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/ajitkumar/from-zero-to-cached-building-a-high-performance-housing-portal-with-django-nextjs-and-redis--ddp
image: ""
tags: [django, nextjs, redis, performance, image-optimization]
---

Part 6 of this series tackles image handling in a housing portal — replacing placeholder gradients with real property photos served via CDN, with automatic thumbnails, WebP conversion, lazy loading, and responsive sizing. Unoptimized property photos can hit 3–5MB each, making a 20-listing page 60–100MB; the CDN-based approach cuts page load by 85% and image file sizes by 90%. The article explains why serving images directly through Django is a bottleneck and how to offload that work to a proper CDN pipeline.
