---
position: 103
---

# Migrations

It is the documentation of the migrations between versions, problems
encountered while migrating, solutions to problems and changes.

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

> :information_source:
>
> Before creating a new project we recommend to move `.theme` to
> `.theme-legacy`. After renaming, don't forget to delete generate contents
> like `/.nuxt`, `/node_modules` etc. because too many changes will appear.

> :warning:
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

> :information_source:
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

> :warning:
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

> :information_source:
>
> Don't forget to review the remaining config from the old project when you
> migrate. Since the config from the `.env` file is renamed, your config such
> as `app.baseUrl` may be corrupted etc.
