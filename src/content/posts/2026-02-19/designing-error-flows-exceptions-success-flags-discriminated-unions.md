---
title: "Designing Error Flows: Exceptions, Success Flags, or Discriminated Unions?"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/__c75487cfa/designing-error-flows-exceptions-success-flags-or-discriminated-unions-45ac
image: ""
tags: [software-design, error-handling, TypeScript, C-sharp, architecture]
---

Designing robust API error flows means choosing between three patterns—exception-oriented, success-flag-based, or discriminated unions—each with distinct tradeoffs in expressiveness, type safety, and maintainability. The author explores these approaches when integrating an external API where failures are inevitable, capturing errors with full context for resilient, supportable systems. Discriminated unions offer the most explicit, type-safe error modeling but require more verbose code compared to simpler alternatives.
