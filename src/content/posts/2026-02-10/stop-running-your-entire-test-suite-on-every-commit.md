---
title: "Stop Running Your Entire Test Suite on Every Commit \U0001F6AB\U0001F9EA"
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/schirrel/stop-running-your-entire-test-suite-on-every-commit-44hd
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/83bzsujqft75iqhfaq8h.webp
tags: [testing, git, developer-experience, javascript, husky, vitest]
---

test-staged is a zero-config tool like lint-staged that runs only the tests related to your staged Git changes, using native dependency graph analysis for Jest/Vitest and smart file mapping for Mocha/Ava. On a typical project with 500+ tests, it cuts commit times from 2-3 minutes down to 2-5 seconds — a 36x improvement — while still blocking commits if related tests fail. Install it alongside Husky pre-commit hooks for a seamless, fast feedback loop without sacrificing test coverage.
