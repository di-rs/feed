---
title: How to Fix prh Regex Errors After Upgrading to Node.js 20
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/shimo4228/how-to-fix-prh-regex-errors-after-upgrading-to-nodejs-20-2f40
image: ""
tags: [nodejs, textlint, prh, regex, javascript, debugging]
---

Node.js 20's updated V8 engine enables Unicode Sets mode (the v flag) for regex, which breaks prh terminology checker patterns using escaped hyphens (e.g., /Claude\-Native/)—a change that silently passes on Node.js 18 but crashes CI on 20+. The fixes are to either use plain string patterns (where manual escapes are unnecessary) or place hyphens inside character classes at the start/end (e.g., /Claude[-]Native/). This is a low-visibility breaking change that commonly hits textlint + prh setups on CI after a Node.js version bump.
