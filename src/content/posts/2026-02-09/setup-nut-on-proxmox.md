---
title: "Setup NUT on Proxmox"
date: "2026-02-09"
time: "00:00"
source: "DEV Community"
link: "https://dev.to/seno21/setup-nut-on-proxmox-4b5n"
image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fp3cprczxqh2unj6d96aw.png"
tags: [proxmox, ups, nut, monitoring, telegram, snmp, server-management]
---

A step-by-step guide to configuring Network UPS Tools (NUT) on Proxmox for monitoring UPS status and triggering automated actions. The tutorial covers SNMPv3 setup on an APC UPS, NUT installation and configuration, and a custom bash script that sends Telegram notifications when the UPS switches to battery or low-battery mode. Includes automatic graceful shutdown when power is critically low.