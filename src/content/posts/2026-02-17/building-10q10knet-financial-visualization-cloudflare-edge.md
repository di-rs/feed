---
title: "Building 10q10k.net: A Financial Visualization Platform Running Entirely on Cloudflare's Edge"
date: 2026-02-17
time: "00:00"
source: DEV Community
link: https://dev.to/kyles_light_275be0175609f/building-10q10knet-a-financial-visualization-platform-running-entirely-on-cloudflares-edge-2p31
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwnkksn1qgsr5nm01sv5q.png
tags: [cloudflare, edge-computing, fintech, nextjs, data-visualization]
---

10q10k.net is a financial data platform covering all S&P 500 companies that visualizes quarterly earnings as interactive Sankey flow charts — built entirely on Cloudflare's edge with Workers, D1 (edge SQLite), and Pages, with zero traditional servers. The stack is a pnpm monorepo with Next.js 16 on the frontend and a Cloudflare Worker handling the data pipeline, running at near-zero monthly cost on the free tier. One of the key challenges was normalizing inconsistent financial data reporting across industries, where the same metric like "Revenue" can appear under 15+ different field names depending on the sector.
