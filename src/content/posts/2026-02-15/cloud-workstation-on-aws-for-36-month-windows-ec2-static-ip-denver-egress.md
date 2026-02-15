---
title: "Cloud workstation on AWS for $36/month: Windows EC2, static IP and Denver egress explained"
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/lbcristaldo/cloud-workstation-on-aws-for-36month-windows-ec2-static-ip-and-denver-egress-explained-36f3
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzymb7nc0shb1pgc8seau.png
tags: [aws, ec2, cloud, devops, windows]
---

A guide to building a Windows cloud workstation on AWS for approximately $36/month using a t3.large EC2 instance with a static Elastic IP and a $3/month residential proxy for geo-specific egress. The key insight is that AWS region and geolocation are completely separate concerns — your instance runs in us-east-1 for billing while the proxy handles Denver IP identity independently. Running 8 hours/day on weekdays keeps compute costs well below the 24/7 alternative of ~$118/month.
