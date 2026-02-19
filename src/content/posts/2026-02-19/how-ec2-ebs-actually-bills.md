---
title: "How EC2 + EBS Actually Bills: A Breakdown for Engineers"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/cloudwiseteam/how-ec2-ebs-actually-bills-a-breakdown-for-engineers-2al2
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcc2vjr5abv5cjlxtansp.png
tags: [AWS, EC2, EBS, cloud-costs, DevOps]
---

Stopping an EC2 instance doesn't stop all billing—EBS storage, elastic IPs, and hibernate snapshots continue accumulating charges, often catching engineers off guard. This breakdown covers each billing component (compute, storage, networking) to help you identify and eliminate "zombie" resources silently draining your AWS budget. Understanding per-second compute pricing, EBS volume types, and stopped-vs-terminated behavior is essential for cost-conscious cloud engineering.
