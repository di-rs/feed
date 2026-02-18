---
title: "Databasus released full backups portability: backups recoverable without Databasus itself"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/finny_collins/databasus-released-full-backups-portability-backups-recoverable-without-databasus-itself-e56
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3t5dyvecnpbcifhu8rmy.png
tags: [database, backups, postgresql, devops, open-source]
---

Databasus now guarantees full backup portability, meaning any backup it creates can be decrypted and restored using only standard open-source tools — no Databasus installation required. The backup pipeline layers pg_dump's custom format, zstd compression, and AES-256-GCM encryption, each step using well-documented open standards. This removes vendor lock-in concerns and ensures data accessibility even during disaster recovery when Databasus itself may be unavailable.
