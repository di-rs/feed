---
title: Deploy Laravel to VPS with GitHub Actions (Zero Downtime CI/CD)
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/houdaifadev/i-wrote-a-step-by-step-tutorial-sharing-my-solution-for-zero-downtime-deployment-of-a-laravel-app-5co5
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F93eyniwgb5lvhzuvj1bq.webp
tags: [laravel, php, github-actions, cicd, devops, deployment]
---

A step-by-step guide for setting up zero-downtime CI/CD deployments of Laravel 12 (PHP 8.3) to a VPS or EC2 instance using GitHub Actions and SSH. The stack covers Ubuntu, Nginx + PHP-FPM, and MySQL — with Nginx pointing to a current/public symlink for atomic deployments that swap the live directory without a restart. The focus is on a minimal but production-ready workflow that's repeatable and maintainable over "perfect but complex."
