---
title: I Built a Chrome Extension That Captures YouTube Screenshots at Custom Intervals (Even 10+ Hour Videos)
date: 2026-02-17
time: "00:00"
source: DEV Community
link: https://dev.to/akshit_suthar/i-built-a-chrome-extension-that-captures-youtube-screenshots-at-custom-intervals-even-10-hour-2gjp
image: ""
tags: [chrome-extension, youtube, javascript, browser-api, open-source]
---

This Chrome extension (Manifest V3) lets users capture screenshots from any YouTube video at configurable intervals (1s to 1hr), across custom time ranges, and downloads them as organized ZIP files — all processed locally with no server or API keys. For videos longer than 1 hour, it automatically chunks processing to avoid memory overflow. Built with the Canvas API and JSZip, it solves a real pain point for students, researchers, and content analysts who need to extract frames at scale.
