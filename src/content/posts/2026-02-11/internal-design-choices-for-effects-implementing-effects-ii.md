---
title: "Internal Design Choices for Effects: Implementing Effects (II)"
date: 2026-02-11
time: 00:00
source: DEV Community
link: https://dev.to/luciano0322/internal-design-choices-for-effects-implementing-effects-ii-12g6
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwn2rjnjvvb3h62bz283z.png
tags: [javascript, typescript, reactive-programming, effects, design-patterns]
---

This article explores the internal design decisions for implementing reactive effects, focusing on the `EffectRegistry` abstraction that provides O(1) lookup from signal nodes to their corresponding effect instances. WeakMap is chosen as the ideal underlying data structure because it holds weak references to object keys, allowing garbage collection of entries without manual cleanup — unlike Map which requires explicit deletion. The pattern cleanly separates callers from implementation details, enabling flexible swapping of Symbol-based, WeakMap-based, or other registry backends.
