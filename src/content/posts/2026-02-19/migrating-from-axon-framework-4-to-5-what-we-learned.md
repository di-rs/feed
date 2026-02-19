---
title: "Migrating from Axon Framework 4 to 5: What We Learned"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/petrmacek/migrating-from-axon-framework-4-to-5-what-we-learned-50db
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz600psay5it7wf4df6nk.jpg
tags: [java, axon-framework, cqrs, event-sourcing, reactive, spring-boot]
---

A real-world migration account from Axon Framework 4.12 to version 5 on a CQRS/Event Sourcing backend running Java 25 and Spring Boot 4, motivated by eliminating hundreds of .block() calls in reactive event handlers. Axon 5's async-native architecture now automatically subscribes to Mono types returned from @EventHandler methods, removing thread pinning, dropping ThreadLocal usage, and simplifying configuration — though the module structure changes caused thousands of initial compilation errors.
