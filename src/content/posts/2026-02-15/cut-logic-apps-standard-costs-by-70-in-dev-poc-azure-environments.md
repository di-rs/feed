---
title: Cut Logic Apps Standard Costs by 70% in Dev & POC Azure Environments
date: 2026-02-15
time: 00:00
source: DEV Community
link: https://dev.to/imdj/cut-logic-apps-standard-costs-by-70-in-dev-poc-azure-environments-22on
image: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4phorceqpy8vii0g2z06.png
tags: [azure, logic-apps, cloud, cost-optimization, devops]
---

Logic Apps Standard runs on a continuously-billed App Service Plan (WS1), but in dev/POC environments you only actually need the compute for ~160 hours/month instead of 730. The solution is a simple deploy-in-the-morning, teardown-in-the-evening cycle that keeps the Storage Account intact — since run history lives in storage, not in the App Service Plan, everything is preserved on redeploy. This reduces costs from ~€170/month to ~€51/month, roughly a 70% saving.
