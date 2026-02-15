---
title: Set Up a New Website in NGINX
date: 2026-02-11
time: "00:00"
source: DEV Community
link: https://dev.to/francgs/set-up-a-new-website-in-nginx-2o1j
image: ""
tags: [nginx, web-server, linux, devops, hosting]
---

A concise step-by-step guide to setting up a new website in NGINX, covering directory creation, permission configuration, and creating a server block config file in /etc/nginx/sites-available. The key step is enabling the site by creating a symlink into sites-enabled, which NGINX reads on startup — keeping configs organized while making it easy to toggle sites on/off. The guide also covers updating server_names_hash_bucket_size in nginx.conf to prevent hash bucket memory issues when adding multiple server names.
