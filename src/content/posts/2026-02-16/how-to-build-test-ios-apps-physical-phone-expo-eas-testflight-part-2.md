---
title: "How to Build and Test iOS Apps on a Physical Phone: Expo EAS and Apple TestFlight (Part 2/3)"
date: 2026-02-16
time: "00:00"
source: DEV Community
link: https://dev.to/cathylai/how-to-build-and-test-ios-apps-on-a-physical-phone-expo-eas-and-apple-testflight-part-23-4ff8
image: ""
tags: [ios, react-native, expo, testflight, mobile-development, apple]
---

Part 2 of a 3-part series on building and testing React Native iOS apps on physical devices using Expo EAS (Expo Application Services). The guide walks through generating a production-signed IPA via `eas build`, letting EAS manage Apple certificates and provisioning profiles automatically, and explains Apple's strict chain of trust that prevents side-loading like on PC. After the build, the signed binary can be distributed through Apple TestFlight for real-device testing before App Store submission.
