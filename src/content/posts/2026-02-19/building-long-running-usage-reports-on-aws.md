---
title: Building long-running usage reports on AWS
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/aws-builders/building-long-running-usage-reports-on-aws-with-event-driven-orchestration-45ba
image: ""
tags: [aws, lambda, step-functions, serverless, event-driven, architecture]
---

A side-by-side comparison of two AWS approaches for generating long-running usage reports: AWS Step Functions (Standard workflows with task tokens) and AWS Lambda Durable Functions. Both solutions address the core challenges of pausing compute while waiting on external work (like an Athena query or LLM call), preserving execution state, and handling retries — with the article making the trade-offs between explicit state machines and durable orchestrators concrete rather than theoretical.
