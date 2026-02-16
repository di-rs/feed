---
title: Git_TerraCLI
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/aravind_d/gitterracli-46o5
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F56tmb4leq5yfj6fpawy1.png
tags: [terraform, github-copilot, cli, devops, automation, azure]
---

A GitHub Copilot CLI agent that autonomously detects and fixes Terraform deprecations in Azure provider code, then opens Pull Requests via Azure DevOps — all without human intervention. The agent uses the Model Context Protocol (MCP) to fetch exact replacements for deprecated fields, runs `terraform plan` to validate changes, and creates PRs automatically inside an Azure Pipeline.
