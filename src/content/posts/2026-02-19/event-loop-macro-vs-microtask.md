---
title: "Event Loop: Macro vs Microtask"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/muhammad_iqbal_9a8fe6a804/event-loop-macro-vs-microtask-5687
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fizlvpr8j64f4tw7tnrlj.png
tags: [javascript, event-loop, async, promises, web-development]
---

JavaScript's single-threaded nature achieves apparent multitasking through the Event Loop, which manages three distinct queues: the Call Stack (synchronous code), the Microtask Queue (Promises, queueMicrotask), and the Macrotask Queue (setTimeout, setInterval, I/O). Microtasks always get fully drained before the next macrotask runs, which is why a resolved Promise callback executes before a setTimeout with 0ms delay. Understanding this priority ordering is essential for writing correct and predictable asynchronous JavaScript.
