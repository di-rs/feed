---
title: "From git pull to GitOps: How I Built a Production CI/CD Pipeline on a $12 DigitalOcean Droplet"
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/lfariaus/from-git-pull-to-gitops-how-i-built-a-production-cicd-pipeline-on-a-12-digitalocean-droplet-34gn
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rknzrr6lo64uq4jhhj8r.png
tags: [devops, cicd, github-actions, docker, digitalocean]
---

A developer details their journey transforming painful 15-minute manual deployments (with downtime) into a fully automated GitOps pipeline using GitHub Actions, GitHub Container Registry (GHCR), and Docker Compose on a budget $12 DigitalOcean droplet. The key insight is building Docker images on GitHub's free runners (7GB RAM) rather than the resource-constrained VPS, then SSH-pulling pre-built images for near-zero-downtime container swaps in under 5 minutes. The pipeline includes parallel testing, automated rollback, and Discord notifications on deploy.
