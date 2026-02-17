---
title: "Fix: Eliminating Double Async Validation in TanStack Form & Zod"
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/albz/fix-eliminating-double-async-validation-in-tanstack-form-zod-2dc
image: ""
tags: [react, tanstack-form, zod, validation, typescript]
---

A known TanStack Form bug causes async Zod validation (superRefine) to execute twice during submission, leading to duplicate API calls and race conditions — particularly dangerous in OTP flows. The fix involves three architectural decisions: using safeParseAsync for manual validation control, a useRef semaphore to prevent re-entrancy, and keeping all side effects outside of validation logic. Additional QueryClient tuning (disabling refetchOnWindowFocus) prevents UX disruptions in critical flows.
