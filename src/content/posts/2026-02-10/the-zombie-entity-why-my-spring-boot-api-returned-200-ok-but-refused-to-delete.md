---
title: "The Zombie Entity: Why my Spring Boot API returned \"200 OK\" but refused to Delete"
date: 2026-02-10
time: "00:00"
source: DEV Community
link: https://dev.to/vigneshwaralingam/the-zombie-entity-why-my-spring-boot-api-returned-200-ok-but-refused-to-delete-46f3
image: ""
tags: [spring-boot, java, jpa, debugging, backend]
---

A developer discovered that their Spring Boot delete endpoint returned 200 OK but silently failed to remove records from the database due to improper management of bidirectional JPA relationships. The fix required breaking the parent-child link from the parent entity side before deletion, allowing JPA's CascadeType.ALL and orphanRemoval behaviors to work as intended. This "zombie entity" bug highlights how bidirectional JPA relationships require explicit bidirectional management to avoid silent failures.
