---
title: "From Heavy to Lightweight: Compressing Images in Expo for Better Performance"
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/angojay/from-heavy-to-lightweight-compressing-images-in-expo-for-better-performance-50fa
image: ""
tags: [expo, react-native, image-compression, mobile, performance]
---

Large unoptimized images are a silent killer for mobile app performance — they slow loading, burn user data, and bloat app bundles. Expo's `expo-image-manipulator` library enables client-side image compression directly on the user's device without a server round-trip, targeting the 100–200KB sweet spot. The guide recommends converting images to WebP format (supported on Android and iOS 14+) using an iterative compression strategy for best results.
