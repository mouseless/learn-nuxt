# Learn - Nuxt

Here you can find how we use nuxt to create static web pages.

To contribute please read [Contribution Guide](./contribution-guide.md).

## Pages Directory

You can create pages under `.theme/pages/`.

### Index Pages

Index pages are named `index.vue` and can be accessed without a route. For
example; `.theme/index.vue` is at `/` and `.theme/index-page/index.vue` is at
`/index-page`.

- Index page demo:
  - [/](/)
  - [/index-page](/index-page)

### Static Routes

File name is automatically the route name e.g. `.theme/static.vue` is at
`/static`

- Static page demo:
  - [/static](/static)

### Dynamic Routes

To create a dynamic page you need to surround the page with '[]' e.g.
`.theme/pages/[page].vue`. To make it optional surround it with `[[]]` e.g.
`.theme/pages/optional/[[page]].vue`.

- Dynamic page demo:
  - [/dynamic-1](/dynamic-1)
  - [/dynamic-2](/dynamic-2)
- Optional route page demo:
  - [/optional](/optional)
  - [/optional/dynamic](/optional/dynamic)

## Public Assets

To serve static assets simply put any file under `.theme/public` folder. It
will be served at the root path e.g. `.theme/public/logo.png` will be at
`/logo.png`.

Demo is at [/public-asset](/public-asset).

## Component

To create a component, create a vue file in `.theme/components` directory e.g.
`.theme/components/SampleComponent.vue`. Then use this component in a page as
shown in `./theme/pages/sample-component.vue`.

Demo is at [/sample-component](/sample-component).

## Escape Curly Braces

To escape curly braces use `v-pre` as shown in
`.theme/pages/escape-curly-braces.vue`.

Demo is at [/escape-curly-braces](/escape-curly-braces).

## Open Graph

With Open Graph, you can also offer a preview of your site with the link you
share. All you need to do for this is to provide the title, description,
image and url for the preview in your meta.

We can change meta in 2 ways in nuxt.

### In `nuxt.config.ts`

In your `nuxt.config.ts`, you can give the head of your page by default.

```ts
export default defineNuxtConfig({
  ...
  app: {
    head: {
      meta:[
        {
          hid: "og:url",
          property: "og:url",
          content: "your-website.com",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "your-website.com/image-path.png",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "title",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "your description",
        },
      ]
    }
  }
})
```

Demo is at [nuxt.config.ts](https://github.com/mouseless/learn-nuxt/blob/main/.theme/nuxt.config.ts)

### Using `useHead()`

You can access the head from your `.vue` files. By importing `useHead`,
you can access your meta and manage it from your page.

```ts
import { useHead } from "#head";

useHead({
    meta: [
      { hid: "og:title", property: "og:title", content: title},
      { hid: "og:description", property: "og:description", content: description },
    ],
  });
```

Demo is at [/open-graph](/open-graph).

## Nuxt Content Plugin

[Nuxt Content](https://content.nuxtjs.org/) plugin, you can read your markdown
files from  content folder in root and shows the content of the appropriate
markdown according to your route.

You must add it to `nuxt.config.ts` to use the module.

```ts
modules: ["@nuxt/content"]
```

There are 2 ways to read markdowns.

### Using `queryContent()`

`queryContent()` reads all your markdowns in the content folder. You can give a
path with the parameter. Root is content directory.

```js
queryContent("/")
```

You can use `<ContentRenderer :value="yourdata">` to print the read data.

### Using `<ContentDoc />`

`<ContentDoc/>` reads the content directory and renders the index.md it finds
by route.

```vue
<template>
  <main>
    <ContentDoc />
  </main>
</template>
```

### Using `<ContentQuery />`

The fastest way to query and display your content and gives access to it via
a scoped slot.

```vue
<template>
  <main>
    <ContentQuery :path="$route.path" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery>
  </main>
</template>
```
