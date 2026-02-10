---
title: "Frontend Coding Challenge — Chat-Like Interface (Part 2)"
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/vftiago/frontend-coding-challenge-chat-like-interface-part-2-1phe
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg96s7mx6ngcmxeveobxv.jpg
tags: [react, typescript, frontend, ux, javascript]
---

Part 2 of a frontend coding challenge series, implementing jump-to-first/jump-to-last navigation in a React chat interface using `messageRefs` (a Map of element refs) and `scrollIntoView`. The key challenge is managing highlight timeouts correctly — using `useRef` to track and cancel stale timeouts prevents race conditions when users click navigation buttons rapidly. The final solution combines smooth scrolling, 1-second highlight animations, and proper cleanup to create a polished, bug-free UX.
