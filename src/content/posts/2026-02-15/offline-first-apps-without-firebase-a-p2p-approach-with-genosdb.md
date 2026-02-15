---
title: "Offline-First Apps Without Firebase: A P2P Approach With GenosDB"
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/estebanrfp/offline-first-apps-without-firebase-a-p2p-approach-with-genosdb-51ec
image: ""
tags: [offline-first, p2p, database, webrtc, javascript, architecture]
---

GenosDB is a peer-to-peer graph database that runs in the browser, stores data locally using OPFS, and syncs between peers via WebRTC with Nostr relays for signaling — no central server at all, not even for connection setup. This article makes the case for true offline-first architecture over Firebase's cache-layer approach, where the database lives on the client and sync is a bonus rather than a requirement. A collaborative todo app example shows how to go from zero to P2P sync with a single npm install and one flag.
