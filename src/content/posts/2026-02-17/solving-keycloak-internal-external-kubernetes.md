---
title: Solving Keycloak Internal vs External Access in Kubernetes with hostname-backchannel-dynamic
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/krjakbrjak/solving-keycloak-internal-vs-external-access-in-kubernetes-with-hostname-backchannel-dynamic-19ja
image: ""
tags: [keycloak, kubernetes, oidc, devops, authentication]
---

When deploying Keycloak in Kubernetes with a public hostname, internal cluster services can't resolve that external URL for backchannel requests like token introspection and userinfo lookups. The fix is enabling Keycloak's hostname:v2 feature with --hostname-backchannel-dynamic=true, which makes Keycloak dynamically determine internal URLs based on the incoming request, allowing access via pod IP or internal Kubernetes DNS. This is especially relevant for clusters running container registries or CI servers that need to authenticate against Keycloak from within the same cluster.
