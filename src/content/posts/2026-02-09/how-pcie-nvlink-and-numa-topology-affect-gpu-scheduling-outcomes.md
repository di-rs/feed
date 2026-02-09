---
title: "How PCIe, NVLink, and NUMA Topology Affect GPU Scheduling Outcomes"
date: "2026-02-09"
time: "06:34"
source: "DEV Community"
link: "https://dev.to/daya-shankar/how-pcie-nvlink-and-numa-topology-affect-gpu-scheduling-outcomes-l52"
image: ""
tags: [gpu, kubernetes, slurm, nccl, infrastructure, performance]
---

GPU topology determines whether allocated GPUs run fast or get bottlenecked by PCIe/NUMA hops—especially on PCIe-only cards like L40S where bad scheduler placement causes NCCL all-reduce stalls and p99 latency spikes. Schedulers allocate GPU counts but ignore wiring, so you must encode topology into Kubernetes node pools with NUMA alignment or use Slurm's --gpus-per-socket and --gpu-bind flags. Verify placement with nvidia-smi topo -m and benchmark with nccl-tests to catch topology regressions before scaling training workloads.
