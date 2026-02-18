---
title: How I Taught My AI Agent to Watch YouTube Videos
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/agbythos/how-i-taught-my-ai-agent-to-watch-youtube-videos-4e5m
image: ""
tags: [ai, llm, video-processing, python, claude]
---

The author built a four-stage pipeline (download, subtitle parsing, scene detection, temporal alignment) to enable a Claude-based AI agent to analyze YouTube videos by decomposing them into timestamped image+text pairs using yt-dlp and FFmpeg. A 78-minute podcast produced 20 keyframes and 156 subtitle segments totaling ~45K tokens, fitting comfortably in Claude's 200K context window. The result is dramatically better analysis than transcript-only approaches, allowing the AI to reference specific visual content at precise timestamps.
