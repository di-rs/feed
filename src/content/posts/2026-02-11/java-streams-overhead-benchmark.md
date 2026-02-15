---
title: I Assumed Java Streams Had Minimal Overhead. They Didn't
date: 2026-02-11
time: 00:00
source: DEV Community
link: https://dev.to/jeffrey_riggle_e261fba011/i-assumed-java-streams-had-minimal-overhead-they-didnt-163e
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6k6hdwiqwfbdr9uafy6y.png
tags: [java, performance, jvm, benchmarking, streams, jmh]
---

A developer rigorously benchmarked Java's Streams API against traditional for-loops using JMH on OpenJDK 17 ARM64, and found significantly more assembly generated to support the abstractions — contrary to the common wisdom that idiomatic code carries negligible overhead. The experiment aggregated 1,000,000 double values and measured the actual JIT-compiled output, revealing that the abstraction cost of Streams is real and measurable, not just in the margin of error. The takeaway: "idiomatic code at little cost" is a mantra worth questioning when performance actually matters.
