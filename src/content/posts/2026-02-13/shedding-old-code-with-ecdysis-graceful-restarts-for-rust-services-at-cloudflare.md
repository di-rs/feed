---
title: "Shedding old code with ecdysis: graceful restarts for Rust services at Cloudflare"
date: 2026-02-13
time: "00:00"
source: Cloudflare Blog
link: https://blog.cloudflare.com/ecdysis-rust-graceful-restarts/
image: ""
tags: [cloudflare, rust, infrastructure, zero-downtime, open-source]
---

Cloudflare has open-sourced ecdysis, a Rust library enabling zero-downtime process restarts for network services handling millions of requests per second — without dropping live connections or refusing new ones during upgrades. After five years of production use across Cloudflare's global network for critical services like traffic routing, TLS lifecycle management, and firewall enforcement, the library is now available to the broader community on GitHub and crates.io. The naive approach of stopping before restarting can cause millions of failed requests globally; ecdysis solves this by allowing the old and new process to coexist during handoff.
