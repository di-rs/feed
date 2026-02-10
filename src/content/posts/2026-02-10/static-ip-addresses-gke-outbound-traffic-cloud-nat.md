---
title: "Static IP Addresses for GKE Outbound Traffic: A Practical Guide to Cloud NAT"
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/lbcristaldo/static-ip-addresses-for-gke-outbound-traffic-a-practical-guide-to-cloud-nat-1ie8
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhb2bemeucx63rtqsa7aq.png
tags: [gke, kubernetes, gcp, cloud-nat, infrastructure]
---

When GKE pods need to connect to IP-whitelisted external services, their ephemeral addresses make stable whitelisting impossible. This guide shows how to use Cloud NAT with manually reserved static IPs to give your entire GKE cluster a predictable outbound IP, keeping nodes in private subnets for security while requiring zero application-level changes.
