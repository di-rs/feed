---
title: "The two returning values in Action Mailer [bugfix]"
date: "2026-02-09"
time: "06:34"
source: "DEV Community"
link: "https://dev.to/fabiobazurtobla/the-two-returning-values-in-action-mailer-bugfix-2lkh"
image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pk2wd9axf03psth0a0f5.png"
tags: [rails, ruby, action-mailer, bugfix]
---

A Rails 7.1 Action Mailer bug occurs when adding after_action callbacks to mailers that conditionally return Mail::Message or ActionMailer::Base::NullMail—the callback expands the mailer lifecycle and copies default values into a message object, causing "SMTP To address may not be blank" errors. The fix ensures backward compatibility by checking `message.to.present?` in the callback condition before merging custom SMTP settings. The author recommends moving business validation out of mailers into service objects, keeping the presentation layer focused on delivery configuration and content formatting.
