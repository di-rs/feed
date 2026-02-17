---
title: Building and Installing VS Code Extensions in Cursor
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/ahmedehab/building-and-installing-vs-code-extensions-in-cursor-5can
image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fur1pp2n3gj8fazfc4wvg.png"
tags: [cursor, vscode, extensions, vsix, developer-tools, ide]
---

Cursor's marketplace doesn't include every VS Code extension due to the fork divergence, but you can manually build and install any extension from source as a VSIX file. The process involves cloning the extension repo, running `npm install` followed by `npx vsce package`, and then installing the resulting `.vsix` file directly in Cursor. The author uses pgFormatter as a practical example to walk through each step.
