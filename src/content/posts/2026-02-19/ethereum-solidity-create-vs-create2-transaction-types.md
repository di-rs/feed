---
title: "Ethereum-Solidity Quiz Q31: What is the difference between CREATE and CREATE2 transaction types?"
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/mihaihng/ethereum-solidity-quiz-q31-what-is-the-difference-between-create-and-create2-transaction-types-1lk7
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdtc8mgltax1tcxdndzls.png
tags: [ethereum, solidity, blockchain, smart-contracts, web3]
---

CREATE uses the deployer's address and nonce to determine contract address, making it simple but unpredictable and chain-specific, while CREATE2 uses a factory, salt, and init code hash for fully deterministic cross-chain identical addresses. CREATE2 is ideal for libraries, factory contracts, and cross-chain deployments where a predictable address before deployment is required. The article includes clear code examples and a side-by-side comparison of characteristics for each opcode.
