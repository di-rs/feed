---
title: Configurar un Nuevo Sitio Web en NGINX
date: 2026-02-11
time: "00:00"
source: DEV Community
link: https://dev.to/francgs/configurar-un-nuevo-sitio-web-en-nginx-44mp
image: ""
tags: [nginx, linux, devops, server, configuration]
---

A concise Spanish-language step-by-step guide for configuring a new website on NGINX: create the document root directory, set ownership/permissions, add an index.html test page, write a server block in `/etc/nginx/sites-available/`, and enable it via a symlink to `sites-enabled/`. The guide also covers adjusting `server_names_hash_bucket_size` in `nginx.conf` to prevent hash bucket memory issues when adding multiple server names.
