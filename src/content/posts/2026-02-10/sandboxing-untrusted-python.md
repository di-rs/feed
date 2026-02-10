---
title: Sandboxing Untrusted Python
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/mohameddiallo/sandboxing-untrusted-python-4mfk
image: ""
tags: [python, security, sandboxing, ai-agents, prompt-injection, isolation]
---

Python's highly introspective nature — mutable runtime, object graph access, frame inspection — makes language-level sandboxing effectively impossible, as any restriction can be bypassed via `__subclasses__()` or traceback frames. The practical conclusion is to sandbox the environment running Python rather than Python itself, using Docker, MicroVMs, or similar OS-level isolation. This has become especially urgent with the rise of AI coding agents and MCP servers, where prompt injection attacks can trick LLMs into executing malicious code with access to sensitive files.
