---
title: "Lightning Network Anchor Outputs Explained: The Basics (Part 1)"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/susangithaigan/understanding-lightning-network-anchor-outputs-part-1-the-basics-2p7j
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pk178lb2uxxa11fhg3ec.png
tags: [bitcoin, lightning-network, blockchain, crypto, layer2]
---

Lightning Network commitment transactions are signed at channel-open time, but if network fees spike later, those pre-signed transactions may get stuck in the mempool because miners prioritize higher-fee transactions. Anchor outputs solve this by allowing channel participants to attach additional fees to a stuck commitment transaction after the fact using CPFP (child-pays-for-parent). This is part one of a beginner-friendly series breaking down the concept step by step before diving into implementation details.
