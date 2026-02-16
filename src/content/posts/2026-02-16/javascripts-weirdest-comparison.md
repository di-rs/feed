---
title: JavaScript's Weirdest Comparison
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/twisterrl/javascripts-weirdest-comparison-i29
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F53hpcsbtqvx522zippw9.png
tags: [javascript, type-coercion, equality, js-quirks, beginners]
---

JavaScript's `==` operator performs implicit type coercion, leading to surprising results like `[] == false` evaluating to `true`. The article walks through the step-by-step coercion rules that explain these behaviors — arrays become empty strings, which become `0`, matching `false`'s numeric conversion. The key takeaway is to always prefer `===` (strict equality) to avoid unintended type conversions.
