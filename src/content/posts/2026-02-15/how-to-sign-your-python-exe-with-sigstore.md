---
title: How to Sign Your Python .exe With Sigstore (No Certificate Required)
date: 2026-02-15
time: "00:00"
source: DEV Community
link: https://dev.to/huckler/how-to-sign-your-python-exe-with-sigstore-no-certificate-required-m5l
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fod222budqkgwhtuh8odl.png
tags: [python, security, code-signing, sigstore, open-source]
---

Sigstore is a free, cryptographically secure alternative to paid code-signing certificates ($200-400/year) that proves your compiled Python .exe came from your GitHub account and hasn't been tampered with. The setup takes only 8 minutes — install the `sigstore` Python package, generate a GitHub OAuth token with `read:user` and `user:email` scopes, and run the signing command before each release. Every user can then independently verify the authenticity of downloaded binaries without trusting a certificate authority.
