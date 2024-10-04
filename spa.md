---
position: 7
---

# Single-Page Application (SPA)

Running nuxt as SPA is pretty straight-forward, but there are a couple of
challenges.

## Configuration

Enable SPA mode by simply setting `ssr` config to `false`. This disables
server-side rendering.

```typescript
export default defineNuxtConfig({
  ...
  ssr: false,
  ...
});
```

## Build

Apparently `nuxi build` only works you have Node.js in backend. Since it is
single page, we shouldn't be requiring it on the server side. To statically
serve an SPA from any http server, we still use `nuxi generate`.

```json
{
  ...
  "scripts": {
    ...
    "build": "nuxi generate",
    ...
  },
  ...
}
```

> [!NOTE]
>
> We named it as `build` not generate, because for us there is no use case where
> we require both `nuxi generate` and `nuxi build`. Since `build` is a general
> term for building the application for production, we sticked with that.

## Loading Page

By disabling `ssr`, `nuxi generate` no more generates static pages per route.
However, it still generates an `index.html` at the root, which will load the app
on the client-side. To inform user with a loading page, Nuxt allows you to show
a loading page in the `index.html` by placing a file called
`app/spa-loading-template.html` in the root of your project. See [Nuxt
Configuration / spaLoadingTemplate][] for the detailed explanation and a sample
template.

```bash
- . (root)
 |_ /app
   |_ spa-loading-template.html
```

> [!NOTE]
>
> Notice this template file is only partial. Nuxt will render it within the
> generated `index.html` file. So, don't wrapp it with `<html>` and `<body>`
> tags.

[Nuxt Configuration / spaLoadingTemplate]: https://nuxt.com/docs/api/nuxt-config#spaloadingtemplate
