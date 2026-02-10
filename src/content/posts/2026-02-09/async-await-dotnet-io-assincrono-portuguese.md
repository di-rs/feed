---
title: "Async/Await por Debaixo do Capô: Entendendo I/O Assíncrono no .NET"
date: 2026-02-09
time: 00:00
source: DEV Community
link: https://dev.to/unhacked/asyncawait-por-debaixo-do-capo-entendendo-io-assincrono-no-net-2c6k
image: ""
tags: [dotnet, async-await, iocp, epoll, io_uring, kqueue, performance, backend]
---

A deep technical exploration of how async/await works in .NET across different operating systems, comparing Windows IOCP (I/O Completion Ports), Linux epoll/io_uring, and macOS kqueue mechanisms. The article explains how the compiler transforms async methods into state machines, why I/O operations are fundamentally different from CPU operations, and provides best practices for avoiding common pitfalls like deadlocks and async-over-sync patterns.
