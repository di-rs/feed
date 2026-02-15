---
title: "Dev Tartan: Deterministic Plaid from a GitHub Username"
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/leereilly/dev-tartan-deterministic-plaid-from-a-github-username-101m
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s8r40nswqnipmin41dei.png
tags: [generative-art, github, svg, javascript, github-copilot, creative-coding]
---

Dev Tartan is a dependency-free web app that generates a unique, deterministic tartan (plaid) pattern from any GitHub username using SHA-256 hashing via the Web Crypto API — same input always produces the same pattern. The hash derives 4–6 colors from a traditional Scottish dye palette, stripe widths, and a symmetric sett rendered as layered SVG with mix-blend-mode multiplying for authentic texture. The entire project is a single index.html with no build step, no backend, and no database.
