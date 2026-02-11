---
title: "Stop Configuring Nginx: The Easiest Way to Deploy Go & React with HTTPS"
date: 2026-02-11
time: 00:00
source: DEV Community
link: https://dev.to/alex_g_aeeb05ba69eee8a4fd/stop-configuring-nginx-the-easiest-way-to-deploy-go-react-with-https-51ma
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8juu65hiy4jguon1j9ma.png
tags: [go, react, docker, caddy, deployment, https]
---

Instead of wrestling with complex Nginx configs and manual Certbot renewals, you can use Caddy as a reverse proxy in a Docker Compose setup to automatically handle HTTPS certificates for multiple subdomains — a minimal Caddyfile replaces hundreds of lines of Nginx configuration. Caddy detects your domain, talks to Let's Encrypt, obtains certificates, and routes traffic automatically with no cron jobs or manual renewals required. The article walks through deploying a Go API (Chi Router + PostGIS) and a React/Vite frontend on DigitalOcean using this containerized approach.
