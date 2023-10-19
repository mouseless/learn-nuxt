---
position: 103
---

# Migrations

It is the documentation of the migrations between versions, problems
encountered while migrating, solutions to problems and changes.

## Nuxt: v3.4.1 👉 v3.7.4

First we tried to upgrade to the new version of nuxt with upgrades, but the
resulting confilicts got too complicated, you can see the upgrade process in
[Package Upgrades](./change-history/package-upgrades.md). So we proceeded by
creating a new nuxt project with the latest version of `nuxt-kit`.

`npx nuxi@latest init .theme`

> :information_source:
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

By default headers come in link format and the render will be as follows.

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
