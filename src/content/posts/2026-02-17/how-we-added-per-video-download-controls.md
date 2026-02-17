---
title: How We Added Per-Video Download Controls
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/alexneamtu/how-we-added-per-video-download-controls-41a9
image: ""
tags: [video, security, golang, s3, web-development, feature-design]
---

SendRec added a per-video download toggle that enforces download restrictions through three independent layers: removing the download button from the HTML entirely (not just hiding it), blocking the download API endpoint before generating presigned S3 URLs, and disabling the browser's built-in right-click save option via response headers. This defense-in-depth approach ensures that even technically savvy users can't bypass the restriction through direct API calls or browser developer tools. The feature solves real-world scenarios like confidential client reviews or product demos escaping their intended context.
