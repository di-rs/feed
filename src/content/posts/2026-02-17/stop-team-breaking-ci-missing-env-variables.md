---
title: How I stopped my team from breaking CI with missing .env variables
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/xserhio/how-to-stop-your-team-from-breaking-ci-with-missing-env-variables-2lbf
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vqeerux32m7d2635l783.png
tags: [devops, ci-cd, environment-variables, tooling, developer-experience]
---

Runtime validators like Zod catch missing env vars at boot but can't prevent developers from forgetting to update `.env.example` before pushing. The author built `env-rx`, a lightweight CLI that acts as a pre-flight check — it blocks git commits when `.env` and `.env.example` are out of sync, and also supports a `--ci` flag to fail GitHub Actions pipelines immediately with a clear diff of missing keys. Zero config required; it just reads your existing files.
