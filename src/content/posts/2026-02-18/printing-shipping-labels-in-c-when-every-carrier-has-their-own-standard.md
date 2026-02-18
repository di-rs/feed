---
title: "Printing Shipping Labels in C#: When Every Carrier Has Their Own Standard"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/stackcollider/printing-shipping-labels-in-c-when-every-carrier-has-their-own-standard-1298
image: ""
tags: [csharp, dotnet, pdf, printing, logistics, backend]
---

A developer chronicles the surprisingly painful challenge of printing shipping labels in C# when different carriers return PDFs in incompatible formats—A5, 4×6", rotated 270°—all needing to print on the same 104×152mm label printer without any operator intervention. The post details failed attempts with .NET's PrintingOptions (missing APIs) and iText7 (AGPL license incompatible with commercial use), exploring the real-world complexity hidden in what initially sounds like a trivial "just print a PDF" task. A candid look at how infrastructure problems in logistics software resist simple solutions.
