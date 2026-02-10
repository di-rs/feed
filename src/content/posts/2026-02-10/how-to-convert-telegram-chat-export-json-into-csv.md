---
title: How to Convert Telegram Chat Export JSON into CSV
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/momentumguard/how-to-convert-telegram-chat-export-json-into-csv-ogh
image: ""
tags: [python, telegram, data, csv, automation]
---

Telegram Desktop exports chats as JSON, but the nested, inconsistent format makes it nearly unusable in Excel or Google Sheets. The article walks through a Python approach to flatten messages — handling multiline text, emojis, media, and system messages — into a clean, properly-quoted CSV. The author also packaged the full edge-case-handling solution into an offline Python CLI for anyone who doesn't want to reinvent the wheel.
