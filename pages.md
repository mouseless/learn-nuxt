---
position: 2
---

# Pages

You can create pages under `.theme/pages/`.

## Content Page

A content page is a page that uses the `<ContentRenderer />` component to render
the given markdown content as HTML. It is located in
`.theme/pages/[...content-page].vue` and renders the page retrieved with
`queryCollection` based on the current route.

## Collections

Collections gather content from paths specified in `content.config.ts` and
create collections under the given names. Then, we can access these collections
using `queryCollection` with the defined names. By giving `type` to collections,
you can create `page` or `data` type. With `source` information you can specify
the location of the data to be collected, with `schema` you can specify the
schema with which they will be saved.

> [!NOTE]
>
> You should use [ZOD][] when specifying `schema`.

See `content.config.ts` to see our example.

See [Nuxt Content Collection Definition][] to see more detail.

### Querying with `queryCollection`

We needed to retrieve all markdown content from a collection. To achieve this,
we used `queryCollection`, allowing us to display the collection content on the
page using `ContentRenderer`.

> [!NOTE]
>
> The `all` and `first` methods return a `promise`, so you need to use `await`.

Demo is available at [/demo/query-collection](/demo/query-collection).

## Custom Pages

You can visit [Routing](./routing.md) to learn how to create custom pages for
different types of routes.

## Layout

We used layout to seperate header and sidebar components from pages. For nuxt
to recognize layouts, they should be implemented in `.theme/layout` folder. To
create a layout create a `default.vue` in the layout folder. Our implementation
is at `.theme/layout/default.vue`. For layout to be used in every page it needs
to be added to `app.vue` as shown in `.theme/app.vue`.

### Public Assets

To serve static assets in a theme like `.css` or `.png` files simply put any
file under `.theme/public` folder. It will be served at the root path. E.g.
`.theme/public/logo.png` will be at `/logo.png`.

Demo is at [/demo/public-assets](/demo/public-assets).

> [!NOTE]
>
> `.png` from content images or generated diagrams should be served under
> `.theme/public` but they shouldn't be included in git. To preserve the
> default behaviour while solving this problem, we change public assets folder
> from `.theme/public` to `.theme/.public` via `dir.public` in
> `.theme/nuxt.config.ts` and copy public assets, content images and generated
> diagrams into `.public` during preprocessing.

## 404 - Not Found

When the requested route does not have corresponding markdown content, we fetch
the content from `not-found.md` and render it on the screen.

Demo is available at [/demo/error/non-existent-content](/demo/error/non-existent-content).

[ZOD]: https://zod.dev/
[Nuxt Content Collection Definition]: https://content.nuxt.com/docs/collections/define