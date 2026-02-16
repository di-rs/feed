---
title: "Your Telegram Bot's Voice Messages Are Missing Speed Control. Here's the Fix."
date: 2026-02-16
time: "00:00"
source: DEV Community
link: https://dev.to/turtleand/your-telegram-bots-voice-messages-are-missing-speed-control-heres-the-fix-13hm
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2ijd9tv22cat24c7q9pg.png
tags: [telegram, bots, ffmpeg, audio, tts, developer-tips]
---

Telegram bots sending TTS voice messages via MP3 lose the speed control (0.5x/1x/1.5x/2x) and waveform visualization features because the platform only recognizes OGG Opus as a proper voice message format. The fix is a simple ffmpeg conversion step — using `libopus` codec with `voip` application mode and 60ms frames — before calling `sendVoice`. For long briefings and summaries, this small change saves meaningful listening time when users play at 2x speed.
