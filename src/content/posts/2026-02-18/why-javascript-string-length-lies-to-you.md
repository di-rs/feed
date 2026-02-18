---
title: Why JavaScript String Length Lies to You
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/vftiago/why-javascript-string-length-lies-to-you-2a9a
image: ""
tags: [javascript, unicode, strings, web-development, programming]
---

JavaScript's string APIs (.length, indexing, .slice()) operate on UTF-16 code units rather than the visual characters developers expect, causing subtle bugs with emoji and non-ASCII text. A single emoji like 😀 is stored as two surrogate-pair code units, meaning .length returns inflated counts and slicing at the wrong position produces corrupted characters. Understanding the distinction between code points, code units, and grapheme clusters is essential for correct Unicode string handling in JavaScript.
