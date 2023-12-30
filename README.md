# Lab 2

## Goals

-  Make an acquaintance with native http api in NodeJS
-  find difference between commonjs/esm
-  find out what is that strange thing called `URL`

## Task

Build small http server with router without using any framework. Use ESM modules for project. ✅
Server should include simple router, write it yourself. Please add 3-6 routes. ✅

### Requirements

-  change default loader to ECMAScript module loader (`type: module` in package.json) ✅
-  support different HTTP Methods (POST, GET, OPTIONS) for one route ✅
-  support 2 different content types (json, urlencoded) ✅
-  follow specification for JSON: https://jsonapi.org/ ✅
-  handle graceful shutdown ✅

## Questions

-  why we have separate http and https?
   -  https has more difficult implementation in NodeJS (ssl certificates, etc)
-  Is it good idea to parse urls with REGEX?
   -  no, because it's hard to read and maintain ❌
