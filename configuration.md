---
position: 8
---

# Configuration

Below you can find how to configure and use configuration values in your
project.

## Base URL

In nuxt, baseurl is the suffix you give to the end of your root url. For
example, if your root url is `mouseless.codes` and your baseurl is `learn`, your
root url will be `mouseless.codes/learn`.

Base url should be given to `app.baseURL` when using it in the nuxt project.
Note that the base url must start with `/`. We always put `/` at the beginning
to avoid this requirement. You can find an example in `.theme/nuxt.config.ts`.

## Open Graph

With Open Graph, you can offer a preview of your site with given title,
description, image and url for the preview in your meta.

We can change meta in 2 ways in nuxt.

### In `nuxt.config.ts`

You can give the head of your page by default. You can find an example
in `.theme/nuxt.config.ts`.

To see this metadata, view source of this page.

### Using `useHead()`

To update the metas with `useHead()` you can access the head content from
your `.vue` files.

Demo is at [/demo/open-graph](/demo/open-graph)

To see the changes, go to [/demo/open-graph](/demo/open-graph) and view the
source code

## Disabling Emoji Conversion

Nuxt content comes with a default setting that converts emoji texts into emoji
icons. This is disabled in `.theme/nuxt.config.ts` under
`content.markdown.remarkPlugins.remark-emoji`. This way a prose component gets
original text instead of an emoji icon which is better because we don't want to
place an emoji icon in code.

## Runtime Config

These are the config settings passed to runtime during build.
In the `nuxt-content` plugin we use it to set the depth of anchor links
and to access our config settings like `baseURL` from pages and components.
See `.theme/nuxt.config.ts` for definition examples and
`.theme/pages/demo/runtime-config.vue` for usage example.

Demo is at [/demo/runtime-config](/demo/runtime-config)

## Nuxt Content Heading AnchorLinks

By default headers come in with anchorlink. You can do configuration to turn it
off and render normal text.

To learn how it's configured look `content.renderer.anchorLinks` configuration
in `nuxt.config.ts`.

To see how is look like [/demo/headings-anchorlinks](/demo/headings-anchorlinks)

## Generate Routes

When generating in Nuxt, if there are pages in the route hierarchy that are not
linked to the index, they are not generated. We add these pages to
`generate.routes` to create them during generate. See `.theme/nuxt.config.ts`
for an example.

## Nitro Prerender Route

Nitro PrerenderRoutes travels and creates all routes before runtime.

In our project, there are some links that we use for testing in the document
and we expect the page to be empty. For this reason, the build gives an error
because Nitro cannot create routes from these links. To ignore these routes,
we add these routes to the `nitro.prerender.ignore` array in `nuxt.config.ts`.

## PayloadExtraction

When this option is enabled payload of pages that are prerendered are
extracted. We do not want the `_payload.json` file to be created, so we set
`experimental.payloadExtraction` to `false`.
