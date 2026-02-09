---
title: "Stop miscalculating age in JavaScript: leap years, Feb 29, and the Jan 31 trap"
date: "2026-02-09"
time: "00:00"
source: "DEV Community"
link: "https://dev.to/momin_ali_e002a22d102ff40/stop-miscalculating-age-in-javascript-leap-years-feb-29-and-the-jan-31-trap-22aj"
image: ""
tags: [javascript, dates, algorithms, testing, edge-cases]
---

Most age calculators fail because they don't account for edge cases like leap years, February 29 birthdays, and JavaScript's month-end date arithmetic quirks (like "Jan 31 + 1 month = March"). This guide presents a robust algorithm that normalizes dates to midnight local time, defines a consistent Feb 29 policy, calculates full years by checking if the birthday has occurred, walks forward month-by-month with proper day-of-month clamping, and includes comprehensive tests for edge cases like month-end transitions and leap year birthdays.
