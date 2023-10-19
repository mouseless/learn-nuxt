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

#### `CHROMIUM_EXECUTABLE_PATH`

We use `Mermaid` to extract diagrams from markdown files. `Mermaid` comes with
`puppeteer` as dependency and uses it to start a browser process to snapshot
diagrams. After v19.0.0 `puppeteer` may not work properly with the downloaded
browser and it will prompt an error like below when you run the application.

```bash
Error: Failed to launch the browser process
```

The current available solution is manually installing _Chromium_ or _Chrome_
browser, and provide its _executablePath_ in `.env.local` file for `puppeteer`
to use under `CHROMIUM_EXECUTABLE_PATH` key.

### `.env.production` File

This is where we host the config settings for production mode. Settings in
`.env.production` are used when deploying.
