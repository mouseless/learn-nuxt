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

The upgrade sequences are as below. Different errors may occur if the order
changes.

### log-symbols

#### 5.1.0

Added it because it is needed for the `log` task in `.prebuild`.

### Node

#### 20.8.0

When upgrading to this version, version 3.4.1 of nuxt gives run time errors.

```log
WARN  Current version of Node.js (20.8.0) is unsupported and might cause
issues.
Please upgrade to a compatible version (^14.18.0 || ^16.10.0 || ^17.0.0 ||
 ^18.0.0 || ^19.0.0).

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

### dotenv

#### 16.3.1

Clean upgrade. No issues.

```json
"devDependencies": {
  "dotenv": "^16.3.1",
  ...
}
```

### eslint-plugin-vue

#### 9.17.0

Clean upgrade. No issues.

```json
"devDependencies": {
  "eslint-plugin-vue": "^9.17.0",
  ...
}
```

### sass

#### 1.69.2

Clean upgrade. No issues.

```json
"devDependencies": {
  "sass": "^1.62.0",
  ...
}
```

### yaml

#### 2.3.2

Clean upgrade. No issues.

```json
"devDependencies": {
  "yaml": "^2.3.2",
  ...
}
```

### webpack

#### 5.88.2

Clean upgrade. No issues.

```json
"devDependencies": {
  "webpack": "^5.88.2",
  ...
}
```

### vue-tsc

#### 1.8.19

Clean upgrade. No issues.

```json
"devDependencies": {
  "vue-tsc": "^1.8.19",
  ...
}
```

### typescript

#### 5.2.2

```json
"devDependencies": {
  "typescript": "^5.2.2",
  ...
}
```

When we upgraded the Typescript version to 5.2.2 there was a conflict with
eslint. You can see the problem below.

```log
=============

WARNING: You are currently running a version of TypeScript which is not
officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.1.0

YOUR TYPESCRIPT VERSION: 5.2.2

Please only submit bug reports when using the officially supported version.

=============
```

### Types/node

#### 20.8.4

```json
"devDependencies": {
  "@types/node": "^20.8.4",
  ...
}
```

This version of type/node does not work with version 3.4.1 of nuxt. You can
downgrade the version or upgrade the version of nuxt for a solution.

### Nuxt

#### 3.7.4

With this version, the generate process fails if the url of the links cannot be
generated. So make sure that the target page of the links exists.

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

[1]:<https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings> "configuring-git-to-handle-line-endings"
[2]:<https://eslint.org/> "eslint.org"

## Move new project

First create new nuxt project with latest version

`npx nuxi@latest init .theme`

Replace to this code in `app.vue`

```vue
<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
```

Create new page `[...content-page]` and add this code to under `/pages` directory

```vue
<template>
  <ContentDoc />
</template>
```

Add content module

`npm install @nuxt/content`

Configure `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // ... options
  }
})
```

If you have come this far, create a markdown file called `index.md` under the
`/content` folder. Display your page by saying `npm run dev`.

Make this configuration to prevent the headers from being in link format

```ts
export default defineNuxtConfig({
  ...
  runtimeConfig: {
    public: {
      mdc: {
        headings: {
          anchorLinks: {
            h1: false,
            h2: false,
            h3: false,
            h4: false,
            h5: false,
            h6: false,
          },
        },
      },
    },
  },
});
```

### Sass & Css

You can make these configurations to source css to the project from outside.

```ts
export default defineNuxtConfig({
  ...
  app: {
      head: {
        ...
        link: [
          {
            rel: "stylesheet",
            type: "text/css",
            href: "https://mouseless.github.io/brand/assets/css/default.css"
          }
        ]
      }
    },
    css: ["~/assets/styles.css"]
})
```

to export sass files first install sass

`npm install sass`

second configure `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  ...
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/variables.scss\";"
        }
      }
    }
  },
  css: ["~/assets/styles.scss"]
})
```

put your style files under `/assets`

### env files

By adding enverioment files, you can export these files during build and use
your constant values during build or runtime.

`npx nuxi dev --dotenv .env.local`

If you write your constant values with the prefix `NUXT` and `NUXT_PUBLIC` in
your env file, nuxt will match them automatically.

### prebuild

In the preparation phase with prebuild, we prepare the markdowns at the root
and put them under content. We also prepare the corresponding pages and pull
the markdown content in these pages and render them.

After `prebuild` make sure that the folder where the public files are moved
from `nuxt.config.ts` is set correctly.

```ts
export default defineNuxtConfig({
  ...
  dir: {
    public: ".public"
  },
})
```

### componenets

You must do this configuration to access globally when writing and using
the component.

```ts
export default defineNuxtConfig({
  ...
  components: {
    dirs: [{ global: true, path: "~/components/Prose" }, "~/components"]
  },
})
```

### new module & nuxt content transformer

To intervene when `nuxt content` reads markdowns and converts them to html
object, we need to use the `transformer` feature of `nuxt content`, to do
this we need to add it as a module to nuxt.

Nuxt scans the `/modules` directory and loads them before starting. If you
add them under `/modules`, you don't need to add those local modules to your
`nuxt.config.ts` separately.

> :warning:
>
> only nuxt modules should be under `/modules`.

To see the use of transformer `/transformers/optimus-prime.ts`
To see how to add a module look `nuxt.config.ts`.

### prerender fail

After version nuxt 3.6.2, if a page corresponding to the link cannot be found,
it gives generate error.

For solution you can make `nitro.prerender.failOnError` `false` or add path to
`nitro.prerender.ignore` array.

See `nuxt.config.ts` for example.
