---
title: Transformers.js v4 Preview: Now Available on NPM!
date: 2026-02-09
time: 00:00
source: Hugging Face Blog
link: https://huggingface.co/blog/transformersjs-v4
image: 
tags: [transformers, javascript, webgpu, machine-learning, onnx, npm]
---

After nearly a year of development, Transformers.js v4 (preview) is now available on NPM! The biggest change is the adoption of a new WebGPU Runtime rewritten in C++, enabling the same code to run across browsers, Node, Bun, and Deno. Performance improvements include ~4x speedup for BERT-based embedding models and support for models exceeding 8B parameters running at ~60 tokens per second on M4 Pro Max.
