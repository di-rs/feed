---
title: Como integrei testes de carga com K6, GitHub Actions e OpenTelemetry
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/marcos_vile/como-integrei-testes-de-carga-com-k6-github-actions-e-opentelemetry-23eh
image: ""
tags: [k6, github-actions, opentelemetry, performance-testing, ci-cd, observability]
---

The author shares how they integrated K6 load testing into their CI/CD pipeline using GitHub Actions, with metrics exported directly to OpenTelemetry for centralized Grafana dashboards powered by Amazon Managed Prometheus. Tests are structured into smoke, load, and stress/soak categories, each triggered automatically on pull requests or scheduled runs. The solution eliminates manual performance testing and makes API performance metrics visible across all environments without extra tooling.
