---
title: Refactoring Legacy Website and the Test Suite That Never Was
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/keilhun/refactoring-legacy-website-and-the-test-suite-that-never-was-449f
image: ""
tags: [legacy-code, refactoring, testing, php, security]
---

A developer inherited a 2010s e-commerce site built on legacy Perl scripts and static HTML — where the checkout literally saved raw credit card numbers to a flat text file. The fix came in three phases: a PHP template system to centralize navigation, PayPal API integration to eliminate raw card handling, and a UPS API integration for automated shipping costs. The bittersweet kicker: a full Codeception/Selenium regression test suite was built on personal time but never adopted by the business, becoming a cautionary tale about selling the value of testing to non-technical stakeholders.
