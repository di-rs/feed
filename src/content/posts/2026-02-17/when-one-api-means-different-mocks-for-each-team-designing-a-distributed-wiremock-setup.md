---
title: When One API Means Different Mocks for Each Team - Designing a Distributed WireMock Setup
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/ykagano/when-one-api-means-different-mocks-for-each-team-designing-a-distributed-wiremock-setup-25jm
image: ""
tags: [testing, api, wiremock, mocking, distributed-systems]
---

Managing WireMock at scale becomes painful when multiple teams need different stub behavior for the same API, or when load balancers require stub distribution across multiple instances. The author built a custom tool to centrally manage distributed WireMock setups, solving the stub synchronization problem and lowering the barrier for non-engineers to create and edit API mocks.
