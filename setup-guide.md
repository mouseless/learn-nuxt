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

## Move to new project

First create new nuxt project with latest version

`npx nuxi@latest init .theme`

> :information_box:
>
> Before create a new project we recommend to move `.theme` to `.theme-legacy`.

Replace to this code in `app.vue`

```vue
<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
```

### Adding Nuxt Content Module

Add content module

`npm install @nuxt/content`

Create new page `[...content-page]` and add this code to under `/pages` directory

```vue
<template>
  <ContentDoc />
</template>
```

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

#### Close `headings.anchorLinks` option

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

### components

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

### trailingslash

With the new nuxt version, the trailing slash solution we found earlier no
longer works. So we removed the solution for trailing slash in
`[...content-page].vue` and the `router.options.strict: true` setting in
`nuxt.config.ts`.

In the new version, the trailing slash causes problems with images. As a
solution, we saw that the change we made in ProseImg reflected the change made
in the prerender phase. Therefore, we removed the page part from the paths of
the images in the files that are not on the index page in the prerender phase.
In this way, it searches the image under the relevant file.

See `ProseImg.vue` component in `components/Prose` folder for how to fix
trailing slash issue.

See here for possible img cases.
[test](./test/index.md)

### Eslint

The `@nuxtjs/eslint-config-typescript` module is sufficient by itself, so
other modules have been removed from eslint.

### Removing the build stage

Removing the build stage we added in generate. Now nuxt builds itself before
generate. The build script that we want to run before generate has been
removed from the scripts.

[1]:<https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings> "configuring-git-to-handle-line-endings"
[2]:<https://eslint.org/> "eslint.org"
