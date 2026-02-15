---
title: Configure DependencyTrack with Terraform
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/bjarnerentz/configure-dependencytrack-with-terraform-32ga
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fngsn3omnpkwfele4hphv.png
tags: [terraform, security, sbom, devops, open-source]
---

DependencyTrack (OWASP) is becoming critical for SBOM management, especially with the EU Cyber Resilience Act mandating dependency tracking for many organizations. Manually setting up dozens of nested Collection Projects across services and environments is tedious and error-prone, but the DependencyTrack Terraform Provider automates the entire hierarchy as infrastructure-as-code. The article shows how to structure projects from app-level collections down to per-service, per-environment leaves and provision the whole tree declaratively with Terraform.
