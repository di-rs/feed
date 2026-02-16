---
title: ScanVault
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/ronakguliani/scanvault-5gn9
image: ""
tags: [cli, typescript, azure, ai, document-intelligence, github-copilot]
---

ScanVault is a CLI-first document intelligence platform that uses AI to extract structured data (amounts, dates, entities) from unstructured files like receipts, invoices, and PDFs, making everything instantly searchable with a natural query syntax (e.g., `vault search "total > 50 category:finance"`). Built as a TypeScript monorepo with Azure Functions, Cosmos DB, and a Next.js dashboard, it supports OpenAI, Anthropic, and Google as extraction providers with Tesseract.js OCR as a zero-config fallback.
