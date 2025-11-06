---
position: 100
---

# Setup Guide

Read the instructions below if you have any trouble running this application
locally. If you have any further issues please contact `> mouseless_` team.

## `.env` Files

It is usually a hidden file where we store our constant variables such as
`BASE_URL` for system settings. It can be customized as `.env.{profile}`.

### `.env.local` File

This is where we host the config settings for developer mode. The local file
is ignored in this repository, the app automatically creates the file in
prebuild.

### `.env.production` File

This is where we host the config settings for production mode. Settings in
`.env.production` are used when deploying.
