---
title: "Generative AI in C#: Building Provider-Agnostic LLM Applications with Microsoft.Extensions.AI"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/bspann/generative-ai-in-c-building-provider-agnostic-llm-applications-with-microsoftextensionsai-2fi4
image: ""
tags: [csharp, dotnet, llm, microsoft, ai-development]
---

Microsoft.Extensions.AI provides a unified abstraction layer for AI services in .NET, letting developers swap providers (OpenAI, Azure OpenAI, Ollama, etc.) at configuration time without refactoring application code. Its primary interfaces—IChatClient and IEmbeddingGenerator—are provider-agnostic, making it trivial to develop locally with Llama 3 and deploy with Azure OpenAI for compliance. Released as stable in early 2025, it does for AI what ILogger did for logging across the .NET ecosystem.
