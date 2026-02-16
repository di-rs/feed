---
title: Equilibrated Adaptive Learning Rates for Non-Convex Optimization
date: 2026-02-16
time: 00:00
source: DEV Community
link: https://dev.to/paperium/equilibrated-adaptive-learning-rates-for-non-convex-optimization-14dm
image: ""
tags: [machine-learning, deep-learning, optimization, sgd, neural-networks, research]
---
ESGD is a new optimization method that addresses the problem of deep learning models getting stuck on saddle points and flat regions by using equilibrated adaptive learning rates — adjusting step sizes based on how the loss surface curves across each part of the model. Unlike older adaptive methods that can behave poorly in directions with both upward and downward curvature, ESGD produces steadier updates and converges as fast or faster than RMSProp. It's a drop-in improvement that many practitioners have found leads to faster, more stable training with less hyperparameter tuning.
