---
title: "Voice Agent Evaluation with LLM Judges: How It Works"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/pld/voice-agent-evaluation-with-llm-judges-how-it-works-11hb
image: ""
tags: [ai, voice-agents, llm, testing, evaluation]
---

Traditional assertion-based testing breaks down for voice agents because the same agent produces different conversations on every run, making string-matching useless. Voicetest solves this with a three-model architecture: a simulator playing the user persona, an agent following a state graph, and an LLM judge that scores the full transcript against defined success metrics. Different models can be assigned to each role — a cheap fast model for simulation, a more capable one for judging — making non-deterministic voice behavior measurable and comparable across releases.
