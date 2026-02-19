---
title: Why Stockfish is So Good (and How You Could Write a Chess Engine)
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/djinn/why-stockfish-is-so-good-and-how-you-could-write-a-chess-engine-2lck
image: ""
tags: [chess, algorithms, cpp, nnue, machine-learning]
---

Stockfish 18 reaches 3650+ Elo by combining alpha-beta search with NNUE (Efficiently Updatable Neural Networks), a technique originally from computer shogi that enables ~60 million position evaluations per second through sparse activation, incremental accumulator updates, and int8/int16 quantization on CPU SIMD. Its 2020 NNUE introduction delivered an overnight +80-100 Elo boost — equivalent to two years of conventional development — and every top-10 open-source engine now uses the same approach. Speed wins over raw neural network size: Stockfish evaluates 1,500× more positions per second than the larger Leela Chess Zero transformer, resulting in 200+ Elo advantage.
