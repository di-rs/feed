---
title: Building a Smart Bible Reading Reminder System - Personalized Push Notifications at Scale
date: 2026-02-09
time: 00:00
source: DEV Community
link: https://dev.to/sangwoo_rhie/building-a-smart-bible-reading-reminder-system-personalized-push-notifications-at-scale-lgc
image: ""
tags: [nestjs, push-notifications, sql, fcm, backend-architecture, scale]
---

Building an automated Bible reading reminder system for 900,000+ users with multiple concurrent reading plans required solving complex challenges including sending exactly one personalized notification per user based on their most recent activity across all plans. The solution leverages SQL window functions (ROW_NUMBER() OVER PARTITION BY) to correctly identify inactive users, personalized FCM deep-links with individual plan data, automated NestJS cron scheduling, and comprehensive logging, resulting in 100% one-user-one-push accuracy and a 23% engagement lift compared to generic reminders.
