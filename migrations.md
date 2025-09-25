---
position: 103
---

# Migrations

It is the documentation of the migrations between versions, problems
encountered while migrating, solutions to problems and changes.

## Nuxt: v3.19.2 👉 v4.1.2

```markdown
- [ ] upgrade nuxt to `4.1.2` with `npx nuxt upgrade --dedupe`
  :warning: make sure version is `4.1.2`
- [ ] moving to `/app` directory
- [ ] search releative path and fix paths according to new app directory
- [ ] edit `tsconfig.ts` to fix ts error
- [ ] use `nitro.prerender.routes` config according to `generate.routes`
- [ ] use auto import env variables feature instead of get with process
  - some app config can set with `NUXT_APP_` prefix in env file, like `baseUrl`
- [ ] upgrade `@nuxt/content` to `3.7.1`
- [ ] import `z` from `zod/v4` instead of `nuxt/content`(probably only in
`content.config.ts` file)
- [ ] add module dependencies and integration
  :warning: `installModule` deprecated
- [ ] upgrade `better-sqlite3` to `12.3.0`
- [ ] check packages you suspect are unnecessary with `npm why` and remove them
if they are not directly used
- [ ] give favicon with `useHead` in `app.vue` and with `baseUrl` using
`runtimeConfig`
- [ ] use nitro prerender hook for ignored path
- if you are upgrade from `3.17.7`
  - [ ] use `globalThis` instead of `window`
  - [ ] use if necessary `onInstall` and `onUpgrade` module hooks
  - [ ] use `defineRouteRules` if necessary
  - [ ] use `Lazy Hydration Macros`
  - [ ] use `<NuxtRouteAnnouncer>` in `app.vue` for users with visual
  impairments
  - [ ] use `onWatcherCleanup` in `watch` if necessary(it's globally imported)
```

### Moving to `/app`

Move this folder and components to under `/app` directory

- assets
- components
- composables
- layouts
- pages
- store(for pinia if exist)
- types
- app.vue and error.vue

final result must be look like this

my-nuxt-app/
├─ app/
│  ├─ assets/
│  ├─ components/
│  ├─ composables/
│  ├─ layouts/
│  ├─ middleware/
│  ├─ pages/
│  ├─ plugins/
│  ├─ utils/
│  ├─ app.vue
│  ├─ app.config.ts
│  └─ error.vue
├─ content/
├─ public/
├─ shared/
├─ server/
└─ nuxt.config.ts

### Editing `tsconfig.ts`

Edit `tsconfig.ts` like

```ts
{
  "files": [],
  "references": [
    { "path": "./.nuxt/tsconfig.app.json" },
    { "path": "./.nuxt/tsconfig.server.json" },
    { "path": "./.nuxt/tsconfig.shared.json" },
    { "path": "./.nuxt/tsconfig.node.json" }
  ]
}
```

to fix references errors

### Adding Module Dependencies and Integration

Modules can specify dependencies and modify options for other modules.

```ts
export default defineNuxtModule({
  meta: {
    name: 'my-module',
  },
  moduleDependencies: {
    'some-module': {
      // You can specify a version constraint for the module
      version: '>=2',
      // By default moduleDependencies will be added to the list of modules
      // to be installed by Nuxt unless `optional` is set.
      optional: true,
      // Any configuration that should override `nuxt.options`.
      overrides: {},
      // Any configuration that should be set. It will override module defaults but
      // will not override any configuration set in `nuxt.options`.
      defaults: {}
    }
  },
  setup (options, nuxt) {
    // Your module setup logic
  }
})
```

### favicon in `app.vue`

```js
import { joinURL } from "ufo";

const config = useRuntimeConfig();

useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: joinURL(config.public.baseUrl, "favicon.ico")
    }
  ]
});
```

### Ignored paths

Use this this hook

```ts
export default defineNuxtConfig({
  ...
  nitro: {
    prerender: {
      ...
    },
    hooks: {
      "prerender:generate"(route) {
        if(route.route === "xx") {
          route.skip = true;
        }
      }
    }
  }
});
```

for ignored paths instead of `nitro.prerender.ignore`

## Nuxt: v3.17.7 👉 v3.19.2

```markdown
- [ ] upgrade nuxt to `3.19.2`.
- [ ] upgrade other packages
  - [ ] upgrade `@mermaid-js/mermaid-cli` to `11.10.1`
  - [ ] upgrade `@nuxt/devtools` to `2.6.5`
  - [ ] upgrade `eslint` to `9.36.0`
  - [ ] upgrade `sass` to `1.93.0`
- [ ] use `globalThis` instead of `window`
- [ ] use if necessary `onInstall` and `onUpgrade` module hooks
- [ ] use `defineRouteRules` if necessary
- [ ] use `Lazy Hydration Macros`
- [ ] use `<NuxtRouteAnnouncer>` in `app.vue` for users with visual impairments
- [ ] use `onWatcherCleanup` in `watch` if necessary(it's globally imported)
```

### `onInstall` and `onUpgrade` hooks

```javascript
export default defineNuxtModule({
  meta: { ... },
  onInstall(nuxt) {
    // The module works when first installed.
  },
  onUpgrade(options, nuxt, previousVersion) {
    // The module runs every time it is updated.
  },
  setup(options, nuxt) { ... }
})
```

### `defineRouteRules` helper

`defineRouteRules` is a helper function that allows you to define custom rules
for a specific route at the page level (within a .vue file).

```js
defineRouteRules({
  prerender: true,
  ssr: false,
  swr: 3600,
  isr: true,
  redirect: '/new-page',
  cors: true,
  headers: {
    'x-custom-header': 'value'
  },
  noScripts: true,
  appMiddleware: 'auth'
})
```

First, to use this feature, you need to enable the
`experimental.inlineRouteRules` option in your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  experimental: {
    inlineRouteRules: true
  }
})
```

### Lazy Hydration Macros

Lazy Hydration Macros are compiler macros used in Nuxt to determine when and how
a component should hydrate (become interactive).

```js
<script setup>
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'visible', // or 'idle', 'interaction', 'mediaQuery', 'if', 'time', 'never'
  () => import('./components/MyComponent.vue')
)
</script>

<template>
  <div>
    <LazyHydrationMyComponent :hydrate-on-visible="{ rootMargin: '100px' }" />
  </div>
</template>
```

### `onWatcherCleanup`

This function is used to clean up side effects created by a watcher (such as
`watch` or `watchEffect`).

```js
watchEffect((onCleanup) => {
  const interval = setInterval(() => {
    console.log('Interval running')
  }, 1000)

  onWatcherCleanup(() => {
    clearInterval(interval)
    console.log('Interval cleaned')
  })
})
```

## Nuxt: v3.16.1 👉 v3.17.7

```markdown
- [ ] upgrade nuxt with `npx nuxi upgrade`. This will upgrade to the latest
  version(`3.17.7`).
- [ ] upgrade other packages
  - [ ] upgrade `@babel/eslint-parser` to `7.28.0`
  - [ ] upgrade `@mermaid-js/mermaid-cli` to `11.6.0`
  - [ ] upgrade `@nuxt/content` to `3.6.3`
  - [ ] upgrade `@nuxt/eslint` to `1.5.2`
  - [ ] upgrade `@nuxtjs/tailwindcss` to `6.14.0`
  - [ ] upgrade `@pinia/nuxt` to `0.11.2`
  - [ ] upgrade `@nuxtjs/i18n` to `10.0.2`
  - [ ] upgrade `@primevue/forms` to `4.3.6`
  - [ ] upgrade `@primevue/nuxt-module` to `4.3.6`
  - [ ] upgrade `@primevue/themes` to `@primeuix/themes`
  - [ ] upgrade `eslint` to `9.31.0`
  - [ ] upgrade `sass` to `1.89.0`
  - [ ] upgrade `primevue` to => `4.3.6`
- [ ] Remove ^ and ~ from all package.json files to have more control over
used packages.
- [ ] install `better-sqlite3` package for `@nuxt/content`
```

## Nuxt: v3.15.4 👉 v3.16.1

```markdown
- [ ] upgrade nuxt with `npx nuxi upgrade`. This will upgrade to the latest
  version(`3.16.1`).
- [ ] upgrade other packages
  - [ ] upgrade `@babel/eslint-parser` to `7.27.0`
  - [ ] upgrade `@nuxt/content` to `3.4.0`
  - [ ] upgrade `@nuxt/eslint` to `1.2.0`
  - [ ] upgrade `@nuxtjs/tailwindcss` to `6.13.2`
  - [ ] upgrade `@pinia/nuxt` to `0.10.1`
  - [ ] upgrade `eslint` to `9.23.0`
  - [ ] upgrade `pinia` to `3.0.1`
  - [ ] upgrade `sass` to `1.86.0`
```

There should be no issues with packages after upgrades.

## Nuxt: v3.12.4 👉 v3.15.4

Below you can find a migration checklist;

```markdown
- [ ] upgrade `nuxt`: "3.15.4"
- [ ] upgrade `vue`: "3.5.13"
- [ ] upgrade `nuxt/content`: "3.1.0"
  - [ ] add `content.config.ts`
  - [ ] `ContentDoc`, `ContentQuery` are deprecated. Use `ContentRenderer`
  - [ ] get pages with `queryCollection`
  - [ ] use `queryCollection` instead of `queryContent`
  - [ ] move `markdown` config into `build`
  - [ ] move `anchorLink` configuration from `runtimeConfig` under `content.renderer`
- [ ] add `@nuxt/eslint`("1.0.1") and remove `@nuxtjs/eslint-config-typescript`
- [ ] update `eslint`: "9.20.0"
  - [ ] remove `.eslintrc` and add `eslint.config.mjs`
  - [ ] wrap configs with `withNuxt`
- [ ] upgrade `scss`: "1.84.0"
  - [ ] use `@use` instead of `@import`
  - [ ] also change on `nuxt.config`
- [ ] upgrade `primevue` and other packages connected to it: "4.2.5"
  - [ ] `cssLayerOrder` deprecated. use `primevue.options.theme.options.cssLayer.order`
- [ ] upgrade `@nuxtjs/tailwindcss`: "6.13.1"
  - [ ] add `injectPosition` to `cssPath`
- [ ] upgrade `@babel/eslint-parser`: "7.26.8"
- [ ] upgrade `mermaid-js/mermaid-cli`: "11.4.2"
- [ ] upgrade `@pinia/nuxt`: "0.9.0"
- [ ] upgrade `pinia`: "2.3.1"
- [ ] upgrade `@rollup/rollup-linux-x64-gnu`: "4.34.6"
- [ ] upgrade `vue-router`: "4.4.3"
- [ ] upgrade `log-symbols`: "7.0.0"
```

### Nuxt Content

#### Add `content.config.ts`

```ts
import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md"
    })
  }
});
```

#### Remove dropped components

All content should be rendered using `<ContentRenderer>` component.
`<ContentDoc>`, `<ContentList>`, `<ContentNavigation>` and `<ContentQuery>`
components are dropped

```vue
<ContentRenderer v-if="doc" :value="doc" />
```

#### Use `queryCollector`

`queryContent()` API is replaced with new `queryCollection()`

```js
const doc = await queryCollection("content").path(route.path).first();
```

#### Move `markdown` config into `build`

```js
//old
content: {
  markdown: {...},
  highlight: {...}
}

//new
content: {
  build: {
    markdown: {...},
    highlight: {...}
  }
}
```

### Eslint

#### Migrate `.eslintrc` to `eslint.config.mjs`

You can do migrate quickly with `npx @eslint/migrate-config .eslintrc.json`
after renaming `.eslintrc` to `.eslintrc.json`.

Then you can configure the Eslint for Nuxt using `withNuxt` with the added
`@nuxt/eslint`.

```js
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    ignores: []
  },
  {
    rules: {
      "arrow-parens": ["error", "as-needed"],
      ...
    }
  }
]);

```

### Scss

In Scss, import is now done with `use`.

```scss
@use 'variables.scss';
@use 'mixins.scss';
@use 'default.scss';
```

Namespace should be used to access the module after import or it should be
specified when importing.

```scss
@use "variables" as *;

@mixin border() {
  border-color: solid 2px $color-bg-second;
}
```

### Primevue

`cssLayerOrder` deprecated. use

```js
primevue: {
  options: {
    theme: {
      options: {
        cssLayer: {
          order: "tailwind-base, primevue, tailwind-utilities"
        }
      }
    }
  },
  //cssLayerOrder: "tailwind-base, primevue, tailwind-utilities"
}
```

### Tailwindcss

Add `injectPosition` to `cssPath`

```js
tailwindcss: {
  cssPath: ["~/assets/tailwind.css", {injectPosition: "first"}]
}
```

## Nuxt: v3.10.3 👉 v3.12.4

Below you can find a migration checklist;

```markdown
- [ ] upgrade nuxt: "3.12.4"
  - [ ] disable inline style feature
- [ ] upgrade babel/eslint-parser: "7.25.1"
- [ ] upgrade mermaid-js/mermaid-cli: "10.9.1"
  - [ ] override puppeteer: "22.15.0"
- [ ] upgrade nuxt/content: "2.13.2"
- [ ] upgrade pinia/nuxt: "0.5.3"
- [ ] upgrade pinia: "2.2.0"
- [ ] upgrade sass: "1.77.8"
  - [ ] move root css rules before any nested
- [ ] upgrade vue: "3.4.35"
  - [ ] disable "vue/no-multiple-template-root"
  - [ ] remove wrapper root elements
- [ ] upgrade vue-router: "4.4.3"
- [ ] check linux build
  - [ ] add optional rollup dependency
- [ ] update workflow actions to `v4`
- [ ] update workflow node versions to `22`
```

> [!NOTE]
>
> Node version 22.6 is used to test with given packages

### Nuxt Content

#### `/` is no longer prerendered

With Nuxt@3.12.0 `/` is removed from prerendered routes. Add `/` to
nitro.prerender.routes if nuxi generate is not working as expected

### Disable `Inline Styles` feature

With Nuxt@3.12, we experienced inconsistency with local and external `css`
precedence when generating static sites. Local `css` files added in
`nuxt.config.ts` is now inlined before external styles when a static site
is generated and causes issues when overriding external styles. Add following
config to `nuxt.config.ts` to disable inlining css files.

```js
export default defineNuxtConfig({
  ...
  features: {
    inlineStyles: false
  }
}
```

### Vue 3

#### Vue 3 multiple root elements

Vue 2 reguired single root element when creating components but with Vue 3 we can
now use of multiple root elements.

```html
<!-- Vue 3 -->
<template>
  <header />
  <footer />
</template>

<!-- Vue 2 -->
<template>
  <div>
    <header />
    <footer />
  </div>
</template>
```

> [!NOTE]
>
> Disable "vue/no-multiple-template-root" when using multiple root elements

#### Precedence change for `v-if v-for`

With Vue 3, `v-if` will have higher precedence when used together with `v-for`
within the same element.

#### Missing Vite @rollup dependency

Upgraded Vite version now creates missing `@rollup/rollup-linux...` package
error and fails when bulding on linux. Add following section to package.json to
fix this issue.

```json
"optionalDependencies": {
    "@rollup/rollup-linux-x64-gnu": "^4.20.0"
  }
```

> [!NOTE]
>
> For further details see [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)

### Sass

#### Nested Before Root Declerations Warning

With recent sass update, a deprecation warning is shown for changing sass
behaviour about css declerations appear before root declerations. Move nested
declerations below any root declerations to maintain expected css behaviour

```css
/* deprecated */
.example {
  color: red;
  a {
    font-weight: bold;
  }
  font-weight: normal;
}

/* suggested */
.example {
  color: red;
  font-weight: normal;
  a {
    font-weight: bold;
  }
}
```

## Nuxt: v3.7.4 👉 v3.10.3

Below you can find a migration checklist;

```markdown
- [ ] upgrade nuxt with `npx nuxi upgrade`. This will upgrade to the latest
  version.
- [ ] upgrade `@babel/eslint-parser`
- [ ] upgrade `@mermaid-js/mermaid-cli`
- [ ] upgrade `@nuxt/content`
- [ ] upgrade `eslint`
- [ ] upgrade `log-symbols`
- [ ] upgrade `sass`
- [ ] upgrade `vue`
- [ ] upgrade `vue-router`
- [ ] use `useSeoMeta` instead of `useHead` for open graph
```

> [!WARNING]
>
> `npx nuxi upgrade` upgrade nuxt with the latest version. When we did this
> update, nuxt had version `3.10.3`. Only this version is guaranteed to be no
> issue :smile:

### Use `useSeoMeta`

While preparing the open graph data, we were updating the meta using `useHead`.
We switched to `useSeaMeta` which comes with the new versions of Nuxt.

```js
useSeoMeta({
  ogTitle: ...,
  ogDescription: ...
});
```

instead of

```js
useHead({
  meta: [
    { hid: "og:title", property: "og:title", content: ... },
    { hid: "og:description", property: "og:description", content: ... }
  ]
});
```

## Node

`Nuxt` v3.7.4 requires `Node` version v18 and above to work but we've decided
to use v20. Make sure you have v20 installed in your local machine.

## Nuxt: v3.4.1 👉 v3.7.4

First we tried to upgrade to the new version of nuxt with upgrades, but the
resulting conflicts got too complicated, you can see the upgrade process in
[Package Upgrades](./change-history/package-upgrades.md). So we proceeded by
creating a new nuxt project with the latest version of `nuxt-kit`.

Below you can find a migration checklist;

```markdown
- [ ] upgrade node version on workflow
- [ ] move `.theme` to `.theme-legacy`
- [ ] create nuxt project (v3.7.4)
- [ ] update `app.vue` code
- [ ] install `nuxt-content` module & add as module in `nuxt.config.ts`
- [ ] add dynamic page & create `.md` file in `/content` directory for demo
- [ ] Disable `headings.anchorLinks`
- [ ] install `sass` -> move assets from old project -> add styles in
  `nuxt.config.ts`
- [ ] move `.env` files from old project
- [ ] add prefix to constants in `.env` file
- [ ] update `runtimeConfig.public` (for `.env`)
- [ ] move prebuild from old project
- [ ] update `config.yml` for puppeteer warnings
- [ ] add prebuild dependencies (`log-symbols`, `mermaid....`)
- [ ] set all components global `true`
- [ ] move all pages & and component from old project
- [ ] move transformers & modules from old projects
- [ ] move modules to under `/modules`
- [ ] add `type` to type imports
- [ ] add empty link to `nitro.prerender.failOnError`
- [ ] make absolute image path
- [ ] move eslintrc config and use only `@nuxtjs/eslint-config-typescript`
- [ ] rename eslint config file as `.eslintrc`
- [ ] add eslint run command to scripts
- [ ] move your scripts from old project
- [ ] remove build stage from scripts
- [ ] set `PayloadExtraction` `false`
- [ ] migration of remaining config in `nuxt.config.ts`
- [ ] Edit incoming old config according to the new config(`.env` config structure etc.)
- [ ] sort configs in `nuxt.config.ts`
```

Start by running following command

```bash
npx nuxi@latest init .theme
```

During installation it will give you options.
When it asks:

- `package manager`:  Select `npm`.
- `initialize git repository`: select `No`.

> [!NOTE]
>
> Before creating a new project we recommend to move `.theme` to
> `.theme-legacy`. After renaming, don't forget to delete generate contents
> like `/.nuxt`, `/node_modules` etc. because too many changes will appear.

> [!WARNING]
>
> `nuxi` automatically install nuxt with the latest version. don't forget to
> set version to `v3.7.4` in `package.json`.

Change the code in `app.vue` as follows

```vue
<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
```

Navigate to the `/.theme` directory `npm run dev` run the command.

When you change the code, you will see a blank html page because a page has
not been added yet.

### Adding Nuxt Content Module

Add content module run following command

```bash
npm install @nuxt/content --save-dev
```

Create new page `[...content-page].vue` and add this code to under `/pages`
directory

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

The nuxt content module will not be able to access any content at this stage
because it is looking for a file with `.md` extension under `/content`.
Therefore, you may see a warning like `Document not found` on the screen.

If you have come this far, create a markdown file called `index.md` under the
`/content` folder. Display your page by saying `npm run dev`.

#### Disable `headings.anchorLinks` option

By default, headers come in link format and the render will be as follows.

```html
<h2 id="head"...>
  <a href="#head">
    Head
  </a>
</h2>
```

You can do the following configuration to turn it off and render normal text.

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

the output is as follows.

```html
<h2 id="head"...>
  Head
</h2>
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

```bash
npm install sass --save-dev
```

then put your style files under `/assets`

You can then configure `nuxt.config.ts` as follows to apply your styles and
access style variables from vue files.

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

### `.env.*` files

By adding environment files, you can export these files during build and use
your constant values during build or runtime.

After getting your env files from the old project, give the relevant `.env`
files to the places you want in the scripts in `package.json` to apply them to
the project.

`"dev": "npx nuxi dev --dotenv .env.local"`

If you write your constant values with the prefix `NUXT` and `NUXT_PUBLIC` in
your env file, nuxt will match them automatically.

`NUXT_PUBLIC_BASE_URL=/`

must have a match in `runtimeConfig.public` for automatic mapping. It should
be as follows.

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: ""
    }
  },
});
```

To access it from somewhere other than `runtimeConfig`, you can call it as
`process.env.NUXT_PUBLIC_BASE_URL`.

### Prebuild

In the setup phase with prebuild, we prepare the markdowns at the root
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

> [!NOTE]
>
> Don't forget to install the dependencies of the prebuild.
>
> ```bash
> npm install log-symbols --save-dev
> npm install @mermaid-js/mermaid-cli --save-dev
> ```

#### `config.yml`

When you get the prebuild from your old project or when you write a new one,
you can remove `puppeteer` warnings by saying `config.headless: new` while
extracting mermaid diagrams in `config.yml`.

### Components

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

### New module & Nuxt Content transformer

To intervene when `nuxt content` reads markdowns and converts them to html
object, we need to use the `transformer` feature of `nuxt content`, to do
this we need to add it as a module to nuxt.

Nuxt scans the `/modules` directory and loads them before starting. If you
add them under `/modules`, you don't need to add those local modules to your
`nuxt.config.ts` separately.

> [!WARNING]
>
> only nuxt modules should be under `/modules`.

To see the use of transformer `/transformers/optimus-prime.ts`
To see how to add a module look `nuxt.config.ts`.

### types

With version `v3.7.4` of Nuxt, you must specify `Type` at the beginning of the
type in type imports as below.

```ts
import type { TestNewProps } from '~~/types';
```

or

```ts
import { type TestNewProps } from '~~/types';
```

### Prerender fail

After version nuxt 3.6.2, if a page corresponding to the link cannot be found,
it gives generate error.

For solution you can make `nitro.prerender.failOnError` `false` or add path to
`nitro.prerender.ignore` array.

See `nuxt.config.ts` for example.

### Trailing slash

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

### Move `package.json` scripts

You can move your scripts in `package.json` from your old project. There is no
need to build before Generate and Development, remove it from your scripts.

### Eslint

Move your Eslint files and rename the config files to `.eslintrc`.

The `@nuxtjs/eslint-config-typescript` module is sufficient by itself, so
other modules have been removed from eslint.

For eslint to work, you can run it in the setup script in `package.json` with
`npx eslint .` or if you have added eslint to dependencies, you can run it
with `eslint .` before build.

### Removing the build stage

Removing the build stage we added in generate. Now nuxt builds itself before
generate. The build script that we want to run before generate has been
removed from the scripts.

### PayloadExtraction

We do not want the `_payload.json` file to be created, so we set
`experimental.payloadExtraction` to `false`.

### Migration `nuxt.config.ts`

At this point, if there is a config left in your old file, move your config
other than the following.

- `router.options.strict: true` ❌
- `typescript.typeCheck: true` ❌

These configs are no longer needed. Apart from these, you can move your
configurations in `runtimeConfig` or routes that you want to be generated.

Remember to sort the config in name order after the migration.

> [!NOTE]
>
> Don't forget to review the remaining config from the old project when you
> migrate. Since the config from the `.env` file is renamed, your config such
> as `app.baseUrl` may be corrupted etc.
