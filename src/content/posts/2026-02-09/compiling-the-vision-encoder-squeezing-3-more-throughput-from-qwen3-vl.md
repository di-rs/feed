---
title: "Compiling the Vision Encoder: Squeezing 3% More Throughput from Qwen3-VL on Hopper GPUs"
date: "2026-02-09"
time: "00:00"
source: "DEV Community"
link: "https://dev.to/mketkar/compiling-the-vision-encoder-squeezing-3-more-throughput-from-qwen3-vl-on-hopper-gpus-24ma"
image: ""
tags: [gpu, vllm, pytorch, optimization, computer-vision, qwen3-vl]
---

A deep-dive into optimizing Qwen3-VL's Vision Transformer encoder by enabling torch.compile in vLLM, achieving a 3.4% throughput improvement on NVIDIA H200 GPUs. The article details the technical implementation, three bugs discovered and fixed during the process, and profiling results showing where compilation provides the most benefit.
