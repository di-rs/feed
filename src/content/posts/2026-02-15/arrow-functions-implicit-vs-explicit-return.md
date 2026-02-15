---
title: "Two Types of Return in Arrow Functions: Implicit vs. Explicit"
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/edriso/two-types-of-return-in-arrow-functions-implicit-vs-explicit-2j90
image: ""
tags: [javascript, arrow-functions, fundamentals, es6, clean-code]
---

A concise explainer covering JavaScript arrow function return styles: implicit return (no `return` keyword, single expression auto-returned) versus explicit return (required when using a block body `{}`). The article highlights the common gotcha with returning objects implicitly — you must wrap them in parentheses `()` to avoid the parser treating `{}` as a block. A quick essential reference for developers transitioning from traditional function syntax.
