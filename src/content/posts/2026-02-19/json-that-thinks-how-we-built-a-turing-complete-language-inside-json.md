---
title: "JSON That Thinks: How We Built a Turing-Complete Language Inside JSON"
date: 2026-02-19
time: "00:00"
source: DEV Community
link: https://dev.to/osama_alghanmi_3a45d72c33/json-that-thinks-how-we-built-a-turing-complete-language-inside-json-4n76
image: ""
tags: [json, programming-languages, lisp, configuration, compilers]
---

The team built Almadar, a Turing-complete programming language that is a strict subset of valid JSON, leveraging the structural equivalence between Lisp S-expressions and JSON arrays to embed logic directly in configuration files. Unlike YAML, HCL, or Jsonnet, Almadar requires no new syntax, no custom parser, and no new tooling — every program is plain JSON that any existing tool can read and validate.
