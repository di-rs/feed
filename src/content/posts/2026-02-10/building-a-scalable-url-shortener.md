---
title: Building a Scalable URL Shortener
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/lucaslomeu/building-a-scalable-url-shortener-33ma
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzinayfj5r29kuo3qyx62.png
tags: [system-design, postgresql, scalability, architecture, url-shortener, hexagonal-architecture]
---

A deep-dive into designing a URL shortener that handles 1,000+ writes/sec and 10,000+ reads/sec using PostgreSQL and hexagonal architecture. The author covers the math behind scale (100M URLs/day over 10 years = 365B records), why PostgreSQL's ACID transactions prevent duplicate short codes, and how hexagonal architecture keeps business logic decoupled from infrastructure. What seems like a trivial CRUD app reveals complex distributed systems challenges.
