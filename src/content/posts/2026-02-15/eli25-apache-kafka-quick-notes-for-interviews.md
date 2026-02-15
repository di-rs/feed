---
title: "ELI25: Apache Kafka Quick Notes for Interviews"
date: 2026-02-15
time: "00:00"
source: DEV Community
link: https://dev.to/haydencordeiro/eli25-apache-kafka-quick-notes-for-interviews-oph
image: ""
tags: [kafka, distributed-systems, message-queue, architecture, interview-prep]
---

Apache Kafka is a distributed pub/sub messaging system originally built by LinkedIn, designed for high throughput, scalability, and fault tolerance. The architecture flows from Producers → Brokers (organized into Topics/Partitions) → Consumer Groups, where each broker stores messages on disk with configurable retention policies. A key constraint to remember: Kafka only guarantees message ordering within a partition, not across the entire topic.
