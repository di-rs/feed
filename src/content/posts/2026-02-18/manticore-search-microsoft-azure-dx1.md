---
title: "Manticore Search on Microsoft Azure: DX1's Story"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/sanikolaev/manticore-search-on-microsoft-azure-dx1s-story-5335
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F70sjpi56kghh3q9cv2it.png
tags: [manticore-search, azure, search-engine, database, cloud, performance]
---

DX1 powers customer and parts search (20M+ records) using Manticore Search on Ubuntu-based Azure VMs, chosen for its open-source license and fast in-memory typeahead performance. The deployment is intentionally simple and low-maintenance, scaling either by upgrading VM sizes or adding cluster nodes as data grows. Best typeahead performance requires keeping indexes in memory, making VM memory the primary scaling lever.
