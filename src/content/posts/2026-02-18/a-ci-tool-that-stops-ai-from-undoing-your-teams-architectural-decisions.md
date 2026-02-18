---
title: A CI tool that stops AI from undoing your team's architectural decisions
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/stewartjarod/a-ci-tool-that-stops-ai-from-undoing-your-teams-architectural-decisions-1e32
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8zstvnrm7kzn7957rz9t.png
tags: [ci-cd, ai-coding, architecture, rust, code-quality]
---

Baseline is a Rust-based CLI that enforces team architectural decisions in CI by catching violations—like banned dependencies or wrong import patterns—before they land in the codebase. AI coding assistants like Cursor and Copilot tend to reintroduce deprecated patterns from their training data, and Baseline prevents this with TOML-defined rules that cover cases ESLint can't express. It's designed specifically for the era of AI-assisted development where human conventions need machine enforcement.
