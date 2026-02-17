---
title: AWS Lambda Managed Instances with Java 25 and AWS SAM - Part 3 Create Lambda function with LMI compute type
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/aws-heroes/aws-lambda-managed-instances-with-java-25-and-aws-sam-part-3-create-lambda-function-with-lmi-1d9g
image: https://media2.dev.to/dynamic/image/width=800,height=,fit=scale-down,gravity=auto,format=auto/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/02b8ftezwcbtkaji47uo.png
tags: [aws, lambda, java, serverless, sam]
---

Part 3 of a series on AWS Lambda Managed Instances (LMI) covers how to create Lambda functions using the new LMI compute type with Java 25 and AWS SAM. Unlike the default Lambda compute model (one request per FireCracker microVM), LMI supports multiple concurrent requests per execution environment — up to 32 — using persistent, EC2-backed instances with configurable capacity providers. The article walks through defining `CapacityProviderConfig` and `FunctionScalingConfig` in SAM templates, with supported runtimes including Java 21+, Python 3.13+, Node.js 22+, and .NET 8+.
