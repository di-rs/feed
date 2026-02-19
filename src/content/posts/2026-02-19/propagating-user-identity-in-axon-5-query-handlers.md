---
title: Propagating User Identity in Axon 5 Query Handlers
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/petrmacek/propagating-user-identity-in-axon-5-query-handlers-4jd8
image: ""
tags: [java, spring, axon-framework, cqrs, reactive-programming, security]
---

A deep-dive into why ReactiveSecurityContextHolder always returns empty inside Axon Framework 5 query handlers: two disruptions break the Reactor context chain — a scheduler hop and Axon's internal toFuture() boundary. The article evaluates three approaches to solve authentication context loss in Spring WebFlux + Axon applications, concluding with an interceptor-based solution that propagates identity without polluting domain query objects. Essential reading for CQRS developers using reactive Spring security.
