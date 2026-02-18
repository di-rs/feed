---
title: "Kubernetes sem Cloud Provider (Parte 1): CNI, Storage Dinâmico, Ingress e Arquitetura Terraform"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/pramos/kubernetes-sem-cloud-provider-parte-1-cni-storage-dinamico-ingress-e-arquitetura-terraform-eof
image: ""
tags: [kubernetes, devops, terraform, docker, infrastructure]
---

This Portuguese-language article documents building a bare Kubernetes cluster using KinD (Kubernetes in Docker), manually configuring all components that cloud providers normally abstract away — CNI networking with Calico, dynamic storage with OpenEBS, and an Ingress controller — all automated via Terraform. The goal is to deeply understand the internals of Kubernetes by removing managed-cloud abstractions and implementing them from scratch. A follow-up will cover TLS certificate management with Vault and cert-manager.
