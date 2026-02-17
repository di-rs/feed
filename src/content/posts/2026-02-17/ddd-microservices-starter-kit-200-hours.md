---
title: I Spent 200+ Hours Building the DDD Microservices Starter Kit I Wish Existed
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/tyson_cung/i-spent-200-hours-building-the-ddd-microservices-starter-kit-i-wish-existed-5dga
image: ""
tags: [dotnet, microservices, ddd, cqrs, clean-architecture]
---

After repeatedly spending the first three weeks of every microservices project on scaffolding rather than features, the author built a complete .NET 8 DDD starter kit with three bounded contexts (Order, Inventory, Notification), CQRS, event-driven communication via Azure Service Bus or RabbitMQ, and Infrastructure as Code. Each microservice follows a four-layer clean architecture with no shared databases, only domain events passed through the message bus. The 108-file solution includes documentation explaining the architectural decisions behind each pattern.
