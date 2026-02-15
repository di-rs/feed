---
title: "NDM-TCP vs Cubic vs Reno vs BBR: Pure Localhost Performance Test (No Artificial Constraints)"
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/hejhdiss/ndm-tcp-vs-cubic-vs-reno-vs-bbr-pure-localhost-performance-test-no-artificial-constraints-2lic
image: ""
tags: [networking, tcp, performance, linux, congestion-control, benchmark]
---

A developer benchmarked four TCP congestion control algorithms — NDM-TCP, Cubic, Reno, and BBR v1 — using iperf3 on a pure localhost loopback interface with zero artificial network constraints (no packet loss, delay, or bandwidth limits). Unlike previous tests that used tc to simulate network conditions, this 40-second test reveals raw maximum throughput capability of each algorithm on Xubuntu 24.04 with Linux 6.11.0. NDM-TCP, the developer's own custom kernel module, is compared against the battle-tested alternatives.
