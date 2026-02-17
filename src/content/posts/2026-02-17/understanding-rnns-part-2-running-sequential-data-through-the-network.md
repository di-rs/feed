---
title: "Understanding RNNs – Part 2: Running Sequential Data Through the Network"
date: 2026-02-17
time: "00:00"
source: DEV Community
link: https://dev.to/rijultp/understanding-rnns-part-2-running-sequential-data-through-the-network-5f8c
image: https://media2.dev.to/dynamic/image/width=800,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9o8nutafjhqf3w9t5rlb.png
tags: [machine-learning, neural-networks, rnn, deep-learning, ai]
---

This second part of the RNN series walks through a concrete stock price prediction example to demonstrate how recurrent networks process sequential data step by step. Values are scaled (low=0, medium=0.5, high=1) and fed sequentially into the feedback loop, with weights, biases, and ReLU activation applied at each timestep to carry context from previous inputs. The walkthrough bridges RNN theory from Part 1 to hands-on understanding of how sequence modeling actually works under the hood.
