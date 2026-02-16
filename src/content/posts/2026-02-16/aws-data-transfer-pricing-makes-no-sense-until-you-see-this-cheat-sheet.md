---
title: "AWS Data Transfer Pricing Makes No Sense - Until You See This Cheat Sheet \U0001F5FA️"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/suhas_mallesh/aws-data-transfer-pricing-makes-no-sense-until-you-see-this-cheat-sheet-3g4j
image: ""
tags: [aws, cloud, pricing, devops, terraform, infrastructure]
---

A comprehensive cheat sheet demystifying AWS data transfer pricing across 15+ scenarios — same-AZ, cross-AZ, cross-region, and internet traffic — with Terraform patterns to minimize costs. Key insights: same-AZ traffic with private IPs is free, NAT Gateway adds a hidden $0.045/GB processing fee on top of other transfer costs, and routing through CloudFront is actually cheaper than direct S3-to-internet at every volume tier.
