---
title: I built a voice chat app because I wanted to talk to my son while we play online
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/steven_hans_b26a962c69563/i-built-a-voice-chat-app-because-i-wanted-to-talk-to-my-son-while-we-play-online-188h
image: ""
tags: [webrtc, voice-chat, open-source, security, rust]
---

A developer built NoamVC, an open-source peer-to-peer voice chat app with end-to-end encryption, after being unsatisfied with Discord/TeamSpeak's ads and data collection. It uses native WebRTC for direct audio (no server stores audio), layered E2E encryption via Insertable Streams API with PBKDF2 key derivation, and the Opus codec at 32 kbps with FEC for efficient, high-quality audio.
