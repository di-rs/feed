---
title: Security in WebForms Core
date: 2026-02-11
time: "00:00"
source: DEV Community
link: https://dev.to/elanatframework/security-in-webforms-core-6df
image: ""
tags: [security, webforms, dotnet, web-framework, xss]
---

WebForms Core is a stateless server-driven web framework by Elanat where all app state lives in the browser, enabling high scalability with lightweight servers. This post deep-dives into its security model, particularly around the two delivery modes for server instructions (with and without HTML) and how the framework handles HTML-aware parsing to prevent injection attacks. Understanding the distinction between pure instruction payloads and HTML-embedded responses is key to reasoning correctly about XSS and data integrity in this framework.
