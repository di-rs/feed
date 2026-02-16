---
title: Lightning Network Anchor outputs
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/susangithaigan/lightning-network-anchor-outputs-p7b
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frjvfrarc8p6z28j56fn4.png
tags: [bitcoin, lightning-network, blockchain, cryptocurrency, payments]
---

Anchor outputs are a Lightning Network feature that solve fee volatility during unilateral channel closes by allowing either party to fee-bump a stuck commitment transaction using Child-Pays-For-Parent (CPFP). Each anchor output holds a small satoshi reserve and follows standard BOLT script patterns, acting as a safety valve that prevents channel funds from being locked on-chain during high miner fee congestion. The article covers how anchors work inside commitment transactions, their technical trade-offs, and practical guidance for deciding whether to enable them in your Lightning node setup.
