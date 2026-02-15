---
title: Custom Kernels for All from Codex and Claude
date: 2026-02-13
time: "00:00"
source: Hugging Face Blog
link: https://huggingface.co/blog/custom-cuda-kernels-agent-skills
image: https://huggingface.co/blog/assets/custom-cuda-kernels/meme.png
tags: [huggingface, cuda, ai-agents, gpu, open-source]
---

Hugging Face built an agent skill that packages CUDA kernel development expertise — GPU architecture specifics, memory patterns, PyTorch bindings — and used it to direct Claude and Codex to write production-ready custom CUDA kernels for both a diffusers pipeline and a transformers model. Both agents produced working kernels with correct bindings and benchmarks end-to-end, demonstrating how packaging domain knowledge into agent skills can tackle highly specialized, high-stakes programming tasks. The approach fills the gap left by the Kernel Hub, which handles kernel distribution but still required someone to write the kernels in the first place.
