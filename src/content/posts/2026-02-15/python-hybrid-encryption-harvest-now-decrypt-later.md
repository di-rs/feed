---
title: "From CTF Flags to Building a Python-Based Hybrid Encryption Tool for \"Harvest Now, Decrypt Later\""
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/mxngo/from-ctf-flags-to-building-a-python-based-hybrid-encryption-tool-for-harvest-now-decrypt-later-3b16
image: ""
tags: [cryptography, python, post-quantum, security, encryption, ctf]
---
SecureVault is a Python file encryption tool built to counter the "harvest now, decrypt later" quantum threat, combining classical X25519 elliptic-curve key exchange with NIST-selected post-quantum ML-KEM-768 in a hybrid design. Files are encrypted with AES-128-CBC (Fernet), and the symmetric key is protected twice — once with each key exchange method — so that breaking one layer in the future still leaves the other intact. The author built this after getting into cryptography via CTF platforms, seeking to apply the concepts to a practical, forward-looking security tool.
