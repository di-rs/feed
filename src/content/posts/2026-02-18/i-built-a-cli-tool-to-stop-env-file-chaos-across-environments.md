---
title: I built a CLI tool to stop .env file chaos across environments
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/atyah/i-built-a-cli-tool-to-stop-env-file-chaos-across-environments-4o4f
image: ""
tags: [devtools, cli, environment-variables, nodejs, developer-experience]
---

env-doctor is a zero-dependency Node.js CLI that validates .env files against a schema with type checking, diffs two .env files side by side, masks sensitive values for safe sharing, and auto-generates .env.example files. A .env.schema format supports types, patterns, required fields, enums, and min/max constraints for thorough pre-deploy validation. Available via npx, MIT licensed, and designed to eliminate the common "someone forgot to document a new env var" problem.
