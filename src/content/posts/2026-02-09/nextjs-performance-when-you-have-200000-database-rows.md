---
title: Next.js Performance When You Have 200,000 Database Rows
date: 2026-02-09
time: "00:00"
source: DEV Community
link: https://dev.to/kiravaughn/nextjs-performance-when-you-have-200000-database-rows-5ee0
image: ""
tags: [Next.js, performance, database, optimization, React, caching]
---

Scaling Next.js apps with large datasets requires focusing on database queries, indexes, and caching rather than React optimizations. Key strategies include adding proper database indexes, implementing cursor-based pagination, using Redis caching, leveraging Server Components, and optimizing images with next/image. Database indexes and Redis caching made the biggest impact, cutting query times from seconds to milliseconds and reducing database hits by 80%.
