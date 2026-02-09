---
title: "I Built a Production RAG System on Azure AKS for $40/Month — Here's Every Decision I Made and Why"
date: "2026-02-09"
time: "00:00"
source: "DEV Community"
link: "https://dev.to/siva2krish/i-built-a-production-rag-system-on-azure-aks-for-40month-heres-every-decision-i-made-and-why-2d22"
image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fraw.githubusercontent.com%2Fsiva2krish%2FRAG-LLM-AKS%2Fmain%2Fdocs%2Fscreenshots%2Farchitecture-cloud.png"
tags: [azure, kubernetes, rag, ai, cost-optimization, architecture]
---

A detailed walkthrough of building a production-ready RAG system on Azure AKS for $40/month, featuring complete document ingestion pipeline, hybrid search with Azure AI Search, GPT-4o-mini for generation, in-cluster Redis caching, and full observability with Prometheus/Grafana. The architecture uses Azure CNI Overlay networking, NGINX Ingress with internal load balancer, KEDA for autoscaling, and runs 13 pods on a single B2s node, with infrastructure as code using Terraform, Helm deployments, and comprehensive cost breakdowns showing fixed infrastructure at $40.17/month plus minimal AI costs under $1/month at development scale.
