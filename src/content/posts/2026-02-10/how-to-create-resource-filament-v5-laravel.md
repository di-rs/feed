---
title: How to create a resource in Filament v5 | Laravel Personal Finance Dashboard
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/maiobarbero/laravel-personal-finance-dashboard-add-filament-v5-resources-37lh
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/np3zz98yxvis0n9hpl8b.webp
tags: [laravel, filament, php, admin-panel, crud]
---

This tutorial walks through building CRUD resources in Filament v5 for a Laravel personal finance dashboard, starting with a Category resource generated via `php artisan make:filament-resource`. The guide focuses on critical real-world scoping problems — ensuring users only see their own data by overriding `getEloquentQuery`, and automatically injecting the authenticated user ID on record creation using `mutateFormDataUsing`. Part of a free Laravel & Filament course series with certificates.
