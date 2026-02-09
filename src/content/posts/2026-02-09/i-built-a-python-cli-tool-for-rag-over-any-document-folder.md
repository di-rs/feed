---
title: "I Built a Python CLI Tool for RAG Over Any Document Folder"
date: "2026-02-09"
time: "00:00"
source: "DEV Community"
link: "https://dev.to/lukaszgrochal/i-built-a-python-cli-tool-for-rag-over-any-document-folder-55ic"
image: ""
tags: [python, cli, rag, ai, chromadb, llm, tooling]
---

A zero-config CLI tool that eliminates RAG boilerplate: just run `rag-cli index ./docs/` and `rag-cli ask "your question"` to query any folder of PDFs, Markdown, or text files. Built with ChromaDB for local vector storage, Typer for CLI ergonomics, and a modular architecture split into three reusable packages (llm_core, rag_core, rag_cli) designed for easy extraction into other projects. Supports both local Ollama models and cloud APIs, with full test coverage and smart design decisions for offline-first, zero-setup operation.