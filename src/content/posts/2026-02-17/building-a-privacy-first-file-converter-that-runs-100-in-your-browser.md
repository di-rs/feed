---
title: Building a Privacy-First File Converter That Runs 100% in Your Browser
date: 2026-02-17
time: "00:00"
source: DEV Community
link: https://dev.to/ansonchan/building-a-privacy-first-file-converter-that-runs-100-in-your-browser-5g8a
image: ""
tags: [webassembly, privacy, browser, ffmpeg, javascript]
---

OmniConvert delivers 94 file conversions and 118 unit conversions entirely client-side using WebAssembly — no file ever leaves your device. The stack uses Astro for static site generation (4,000+ pages, 8 languages), FFmpeg.wasm for audio/video, Canvas API for images, pdf-lib for PDFs, and SheetJS for spreadsheets, all deployed on Cloudflare Pages' free tier. Key engineering challenges included lazy-loading the 25MB FFmpeg.wasm binary, working around cross-origin Web Worker restrictions, and patching iOS Safari's broken blob download behavior.
