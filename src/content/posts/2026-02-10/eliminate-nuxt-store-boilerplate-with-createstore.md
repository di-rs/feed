---
title: Eliminate 80% of Nuxt store boilerplate with a single createStore call
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/diphyx/eliminate-80-of-nuxt-store-boilerplate-with-a-single-createstore-call-o42
image: ""
tags: [nuxt, vue, state-management, typescript, zod, open-source]
---

Harlemify is an open-source Nuxt module built on top of the Harlem state management library that auto-generates typed CRUD stores from Zod schemas with a single `createStore` call. Instead of manually writing reactive state, loading flags, error refs, and fetch functions for every API resource, you define the data shape once and get full CRUD operations for free. The module eliminates the repetitive boilerplate that plagues every Nuxt app managing multiple API resources.
