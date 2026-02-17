---
title: Debtmap Re-adds JavaScript and TypeScript Support
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/entropicdrift/debtmap-re-adds-javascript-and-typescript-support-4bha
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8uwxf8la4q5ms6elaa4x.jpg
tags: [javascript, typescript, static-analysis, technical-debt, open-source, tree-sitter]
---

Debtmap v0.15.0 restores JavaScript and TypeScript support via tree-sitter, after it was dropped in v0.7.0 to focus on Rust quality. The rebuilt analyzer detects complexity metrics (cyclomatic, cognitive, nesting depth), async anti-patterns like callback hell and missing `.catch()` handlers, and TypeScript-specific issues such as overuse of `any` and type assertions. The rewrite properly mirrors the quality of the existing Rust analyzer rather than the half-baked multi-language approach that was removed earlier.
