---
title: Building a dbt Incremental Model for Parsing and Chunking PDFs for Snowflake Cortex Search Service
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/sagara/building-a-dbt-incremental-model-for-parsing-and-chunking-pdfs-for-snowflake-cortex-search-service-3eik
image: ""
tags: [snowflake, dbt, rag, pdf-parsing, data-engineering]
---

This article details how to build a cost-efficient dbt incremental model that parses and chunks PDF documents from S3 using Snowflake's AI_PARSE_DOCUMENT function, enabling RAG via Cortex Search Service. The model uses a delete+insert strategy with modification-timestamp checks to only reprocess changed files, and chunks text using SPLIT_TEXT_MARKDOWN_HEADER for structured output. It's a practical guide for data engineers looking to integrate document-based AI search into their Snowflake pipelines.
