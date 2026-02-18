---
title: "One-Pixel Attacks: Why Computer Vision Security Is Broken"
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/jgracie52/one-pixel-attacks-why-computer-vision-security-is-broken-931
image: ""
tags: [machine-learning, computer-vision, security, adversarial-ml, neural-networks]
---

A 2019 paper by Su et al. demonstrated that changing a single pixel in an image is enough to completely fool state-of-the-art CNN classifiers — including ResNet, VGG, and Inception — with a 70.97% success rate on CIFAR-10, using only black-box query access and differential evolution. This isn't a bug in a specific model but a fundamental property of how neural networks carve jagged, high-dimensional decision boundaries, making them brittle at the edges. Modern Vision Transformers face similar sparse adversarial attacks via adversarial patches, highlighting that the vulnerability is architectural, not implementation-specific.
