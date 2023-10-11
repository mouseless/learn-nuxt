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

## End of line

We use [Eslint][2] in this project. Configuration is in `.eslintrc.json`
file, and we use `unix` style line endings.

### Windows Settings

When you checkout a repository on Windows, by default git handles line endings
as `clrf` for compatibility. Due to this reason, when you run the application,
eslint will prompt and error because it expects `lf` line endings.

You can set `core.autoclrf` to false in your `git config` or provide setup for
specific repository. Visit [Git Documentation][1] page for further details.

```bash
$git config --global core.autocrlf true
```

> :bulb:
>
> You can use the command below to fix your existing files
>
> ```bash
> npx eslint . --fix
> ```

## Migration

### Node

#### 20.8.0

When upgrading to this version, version 3.4.1 of nuxt gives run time error.

```log
ERROR  [uncaughtException] This error originated either by throwing inside of
an async function without a catch block, or by rejecting a promise which was
not handled with .catch(). The promise rejected with the reason "Search string
not found: "ts.executeCommandLine(ts.sys, ts.noop, ts.sys.args);"".
```

Upgraded the nuxt version to 3.7.4 to fix it.

### Mermaid-js

#### 10.4.0

Clean upgrade. No issues.

```json
"devDependencies": {
    "@mermaid-js/mermaid-cli": "^10.4.0",
    ...
}
```

### Nuxt

#### 3.7.4

### Nuxt Content

#### 2.5.2

[nuxt.config.ts]
```ts
content: {
  anchorLinks: {
    depth: 0
  }
}
```

#### 2.8.5

[nuxt.config.ts]
```ts
mdc: {
  headings: {
    anchorLinks: {
      h1: false,
      h2: false,
      ...
    }
  }
}
```

### log-symbols

#### 5.1.0

Added it because it is needed for the `log` task in `.prebuild`.

[1]:<https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings> "configuring-git-to-handle-line-endings"
[2]:<https://eslint.org/> "eslint.org"
