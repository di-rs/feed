---
title: "I built a RAG system where hallucinations aren't acceptable. Here's what actually worked."
date: 2026-02-18
time: "00:00"
source: DEV Community
link: https://dev.to/buildsyncinc/i-built-a-rag-system-where-hallucinations-arent-acceptable-heres-what-actually-worked-b2e
image: ""
tags: [rag, ai, compliance, llm, vector-search, eu-regulations]
---

A developer built Gibs, an EU regulatory compliance API (DORA, AI Act, GDPR) that returns answers with direct EUR-Lex article citations — no hallucinations allowed. Key lessons include custom legal text chunking with a cross-reference graph of 3,600+ edges across regulations, and classifier routing proving more important than embedding quality for accuracy. The system uses Qdrant vector search with a reranker and LLM synthesis, achieving over 79% accuracy on DORA benchmarks.
