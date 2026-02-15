---
title: Building env-doctor with GitHub Copilot CLI
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/lewisawe/building-env-doctor-with-github-copilot-cli-55m7
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eyxr4qnvdvmt7hqajjaj.png
tags: [cli, devtools, environment, github-copilot, nodejs, dx]
---

env-doctor is a CLI tool that automatically scans project files (package.json, Dockerfile, docker-compose.yml, README, CI configs) to check if your local environment matches what the project needs, then reports exactly what's passing and what's missing. It covers runtime versions, package managers, databases, services, environment variables, and port availability for Node.js, Python, and Go projects. Built with GitHub Copilot CLI, it also supports JSON output for CI pipelines and a verbose diagnostic mode.
