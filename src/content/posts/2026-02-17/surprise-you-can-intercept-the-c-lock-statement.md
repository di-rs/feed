---
title: "Surprise: You Can \"Intercept\" the C# lock Statement"
date: 2026-02-17
time: "00:00"
source: DEV Community
link: https://dev.to/dimonsmart/surprise-you-can-intercept-the-c-lock-statement-14n
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftbbclrmy0bwl5t2somgq.png
tags: [csharp, dotnet, threading, concurrency, lock]
---

The C# `lock` statement is syntactic sugar that compiles to `Monitor.Enter`/`Exit` calls, and because the compiler binds by name, you can define your own `System.Threading.Monitor` type to intercept and change what `lock` means—a fascinating but dangerous footgun. This works on the classic `lock (object)` path, though .NET 9 and C# 13 introduced a faster path using `System.Threading.Lock` and `EnterScope()`. The post presents this as a cautionary tale about compiler binding semantics, not a technique to use in production.
