---
title: "FluxDown: A Free Download Manager Built with Rust + Flutter"
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/zhiwei_ma_0fc08a668c1eb51/fluxdown-a-free-download-manager-built-with-rust-flutter-3ace
image: ""
tags: [rust, flutter, open-source, download-manager, tokio]
---

FluxDown is a free, ad-free download manager with a Rust/Tokio async backend and Flutter GUI that handles HTTP/HTTPS, FTP, BitTorrent, HLS, and DASH protocols in a single app. Its standout feature is adaptive segmentation — it probes your bandwidth before downloading and dynamically calculates the optimal number of parallel segments based on file size, measured speed, and CPU cores, with runtime rebalancing to keep idle workers busy on slow segments.
