---
title: "From JVM to Native: My Performance Experiments with Spring Boot and Quarkus"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/bruno_minato/from-jvm-to-native-my-performance-experiments-with-spring-boot-and-quarkus-2je2
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftoj5ik4e91wr0enpuqfh.png
tags: [java, spring-boot, quarkus, graalvm, performance]
---

A hands-on performance comparison between Spring Boot (JVM) and Quarkus Native (GraalVM) using a Kafka+PostgreSQL workload reveals that Quarkus starts 12x faster (0.118s vs 1.49s) and uses only 40MB RAM vs Spring's 256MB. Under low concurrency Spring achieves higher HTTP throughput by saturating CPU, while Quarkus delivers lower per-request latency, 6x better memory efficiency, and faster Kafka drain. The takeaway is that Quarkus Native excels in memory-constrained, spot-instance, or serverless environments where startup speed and container density are critical.
