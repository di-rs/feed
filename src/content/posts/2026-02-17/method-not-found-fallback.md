---
title: Method Not Found Fallback
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/lizmat/method-not-found-fallback-5cn8
image: ""
tags: [raku, programming, meta-programming, dispatch, language]
---

This post in the "Cases of UPPER" series explores Raku's FALLBACK method, which allows classes to gracefully handle calls to methods that don't exist rather than throwing an error. Instead of using a CATCH phaser to trap X::Method::NotFound exceptions, FALLBACK provides a cleaner, more idiomatic way to implement dynamic method dispatch and proxy-like patterns in Raku.
