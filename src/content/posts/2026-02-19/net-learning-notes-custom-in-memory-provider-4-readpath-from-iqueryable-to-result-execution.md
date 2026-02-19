---
title: ".Net Learning Notes: Custom In-Memory Provider(4) - ReadPath - From IQueryable to Result Execution"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/alexleeeeeeeeee/net-learning-notes-custom-in-memory-provider4-readpath-from-iqueryable-to-result-execution-f9l
image: ""
tags: [dotnet, entity-framework, linq, database, csharp]
---

This deep-dive covers EF Core's read path in a custom in-memory provider, explaining how non-terminal LINQ operations like Where, Select, and OrderBy only build expression trees — no execution occurs until a terminal operator is called. EF Core drives the entire translation process, invoking the provider's IQueryableMethodTranslatingExpressionVisitor to produce a ShapedQueryExpression carrying both the row-level query and shaper expression. The provider never scans LINQ directly; it responds to EF Core's translation callbacks, making the pipeline clean and decoupled from any custom DSL.
