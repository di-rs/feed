---
title: Implementing protected Lambda function URLs in user-facing applications
date: 2026-02-19
time: 00:00
source: DEV Community
link: https://dev.to/aws-builders/implementing-protected-lambda-function-urls-in-user-facing-applications-1f6p
image: ""
tags: [aws, lambda, cognito, serverless, iam, security]
---

This article explains how to secure AWS Lambda function URLs with IAM authorization for user-facing apps using Cognito identity pools — a lighter alternative to API Gateway. The pattern uses Cognito user pools for authentication, identity pools for temporary IAM credentials, and Amplify on the frontend to sign requests with Signature V4, enabling streamed Lambda responses without API Gateway overhead. It's a practical architecture for teams wanting simplicity without sacrificing security on streamed serverless endpoints.
