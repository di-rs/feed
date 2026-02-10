---
title: Hoisting in JavaScript
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/ananya_mohanta_b44a988e76/hoisting-in-javascript-4nkh
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpajf1hfjgzsc4w5lmkm1.png
tags: [javascript, hoisting, fundamentals, execution-context]
---

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the creation phase — not physically, but by allocating memory before execution starts. This explains why `var` variables can be accessed before their declaration (returning `undefined`) and why function declarations work even before they appear in code. Understanding the execution context's creation phase is the key to demystifying this often-confusing JavaScript quirk.
