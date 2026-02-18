---
title: Repeat Yourself
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/vnykmshr/repeat-yourself-1h9k
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffvkbvvevkl7sf9k1j2xs.png
tags: [llm, prompting, transformers, research, ai]
---

Google researchers found that simply repeating your prompt gives non-reasoning LLMs better answers — 47 wins out of 70 benchmarks with zero losses across Gemini, GPT, Claude, and DeepSeek. The reason is causal masking: the first tokens of a prompt are processed with the least context, so the second copy lets those early tokens attend to the full first copy, resolving an inherent architectural asymmetry. Notably, reasoning models trained with RL had independently discovered the same workaround — they repeat parts of the question during chain-of-thought, effectively solving the same problem the training process found on its own.
