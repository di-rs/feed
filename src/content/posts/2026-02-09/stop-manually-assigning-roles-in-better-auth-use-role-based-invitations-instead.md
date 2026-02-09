---
title: "Stop Manually Assigning Roles in Better Auth: Use Role-Based Invitations Instead"
date: 2026-02-09
time: "00:00"
source: DEV Community
link: https://dev.to/sandy00/stop-manually-assigning-roles-in-better-auth-use-role-based-invitations-instead-2bd7
image: ""
tags: [better-auth, authentication, roles, invitations, authorization, nextjs]
---

A Better Auth plugin that adds role-based invitations to avoid manual database edits for role assignment. The plugin provides invite creation with expiration, max uses, tracking, and customizable permission rules via canCreateInvite, while supporting both public (shareable) and private (email-bound) invitations. It handles the invitation flow—creation, delivery, activation, and role assignment—while keeping you in control of who can grant which roles through flexible server-side permission rules.
