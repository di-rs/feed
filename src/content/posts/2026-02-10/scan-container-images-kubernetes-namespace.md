---
title: Scan container images used by pods running in a Kubernetes namespace
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/sjegadeeswaran/scan-container-images-used-by-pods-running-in-a-kubernetes-namespace-4inl
image: ""
tags: [kubernetes, security, containers, trivy, devops]
---

This article walks through a shell script that uses kubectl to list all container images running in a Kubernetes namespace and scans each one for HIGH and CRITICAL vulnerabilities using Trivy. The script outputs results to individual JSON files per image, making it easy to audit a namespace's security posture without scanning the entire cluster. A practical, copy-paste-ready solution for DevSecOps workflows.
