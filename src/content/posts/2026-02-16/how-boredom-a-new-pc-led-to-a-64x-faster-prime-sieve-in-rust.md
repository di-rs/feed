---
title: How Boredom + A New PC Led to a 64x Faster Prime Sieve in Rust (The "Dopamine optimization" Story)
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/whisprer/how-boredom-a-new-pc-led-to-a-64x-faster-prime-sieve-in-rust-the-dopamine-optimization-story-1mj2
image: ""
tags: [rust, performance, optimization, algorithms, prime-numbers]
---

A developer ported highly optimized C++ prime sieve logic to Rust, creating the "Primer" crate that uses bit-packing, odd-only optimization, and hardware intrinsics to achieve 64x faster performance and a 95x smaller memory footprint compared to standard library implementations. The project started as a boredom-driven weekend experiment on a new workstation before becoming a publishable Rust crate. It showcases how Rust's safety guarantees can be seamlessly combined with low-level performance techniques like trailing_zeros and cache-locality tricks.
