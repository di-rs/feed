---
title: When "MySQL" isn't actually MySQL
date: 2026-02-17
time: 00:00
source: DEV Community
link: https://dev.to/drupaladmin/when-mysql-isnt-actually-mysql-4o4f
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa5wqb0tbn39gttjmgeeh.png
tags: [databases, mysql, mariadb, devops, backend]
---

Many teams believe they're running MySQL but are actually on MariaDB, because most Linux distributions and hosting panels replaced MySQL with MariaDB by default years ago — and the mysql client works identically. ORMs abstract most of the differences, making the switch completely invisible from the application layer. The article prompts developers to ask whether their database engine is an intentional architectural choice or simply inherited from a base image or hosting stack.
