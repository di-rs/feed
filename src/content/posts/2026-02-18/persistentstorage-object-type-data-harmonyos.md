---
title: How to persistently store object-type data on a hard drive using PersistentStorage
date: 2026-02-18
time: 00:00
source: DEV Community
link: https://dev.to/harmonyos/how-to-persistently-store-object-type-data-on-a-hard-drive-using-persistentstorage-472f
image: ""
tags: [harmonyos, mobile, storage, persistence, json]
---

HarmonyOS's `PersistentStorage` only supports primitive types (number, string, boolean, enum), but objects and arrays can be stored by serializing them to JSON strings via `JSON.stringify()` before saving and deserializing with `JSON.parse()` on retrieval. The article walks through the relationship between AppStorage and PersistentStorage, the reactivity hook via `@StorageLink`, and caveats like handling circular references and non-serializable values with proper error handling. This pattern bridges the gap between structured app state and the limitations of on-disk persistence in HarmonyOS apps.
