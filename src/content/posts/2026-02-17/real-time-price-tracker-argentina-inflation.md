---
title: "How I built a real-time price tracker to fight 200%+ inflation in Argentina \U0001F1E6\U0001F1F7"
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/facutom/how-i-built-a-real-time-price-tracker-to-fight-200-inflation-in-argentina-1m9
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1dq3ljcpx6f30krx1mqk.png
tags: [side-project, react, python, web-scraping, supabase]
---

A developer in Argentina built TradingChango, a real-time grocery price comparison tool to combat hyperinflation, using React + TypeScript + Tailwind on Vercel for the frontend, Python + Playwright for scraping inconsistent supermarket websites, and Supabase (PostgreSQL) as the database. The standout feature is a barcode scanner using the device camera for instant in-store price checks. Scrapers run on a schedule via GitHub Actions, normalizing data across multiple retailer formats before pushing to Supabase.
