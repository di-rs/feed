---
title: "How We Reduced INP by 100ms+: GTM Isolation, React Compiler, and Better Telemetry"
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/subito/how-we-reduced-inp-by-100ms-gtm-isolation-react-compiler-and-better-telemetry-315g
image: https://media2.dev.to/dynamic/image/width=800,height=,fit=scale-down,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xdkravmxc30iiogh7kua.png
tags: [performance, core-web-vitals, react, next-js, google-tag-manager]
---

Subito (Italy's leading classifieds marketplace) tackled poor INP scores on their highest-traffic pages by running A/B tests that isolated the impact of GTM, advertising scripts, and their own code. They discovered GTM (specifically TikTok/Facebook tracking scripts) was the primary bottleneck on the Ad Details page — disabling TikTok tracking alone dropped INP from 208ms to ~170ms. On the Listing page, enabling the React Compiler in Next.js 16 brought INP down from 345ms to 271ms, a significant free performance win.
