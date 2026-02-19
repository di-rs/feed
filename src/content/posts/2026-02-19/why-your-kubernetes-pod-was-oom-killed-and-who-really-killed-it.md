---
title: Why your kubernetes Pod was OOM killed and who really killed it.
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/chunyi_wang/why-your-kubernetes-pod-was-oom-killed-and-who-really-killed-it-1jab
image: ""
tags: [kubernetes, linux, devops, memory, cgroups, containers]
---

Kubernetes OOMKill events can originate from three distinct layers: kubelet eviction based on QoS class and priority, Linux cgroups enforcing container memory limits, or the kernel's OOM killer when global system memory is exhausted. The article traces a real Logstash pod from the Kubernetes API all the way down to the Linux cgroup filesystem to illustrate how each mechanism works. Understanding which layer actually triggered the kill is essential for properly diagnosing and fixing memory issues rather than blindly increasing limits.
