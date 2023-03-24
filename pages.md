---
position: 2
---

# Pages

You can create pages under `.theme/pages/`.

## Content Page

Content page is a page that uses `<ContentDoc />` which renders given markdown
content as html. It is at `.theme/pages/[...content-page].vue` which has a
catch all route to handle any markdown file in any directory.

### Querying with `queryContent`

We needed to load all markdown content under a folder in one page. To achieve
this we used `queryContent` by which you can retrieve content under `content/`
folder.

> :information_source:
>
> `find`, `findOne` methods return `promise` so you need to wait with `await`.

Demo is at [/demo/query-content](/demo/query-content)

> :warning:
>
> We've disabled `navigation` and `surround` options to avoid extra queries
> when a page is loaded. You might reenable these depending on the theme you
> are using.

### Querying with `<ContentQuery>`

We needed to load all markdown content under a folder on a single page. When
there is no need to change the data we receive with `queryContent` in the
script block, the query sent to the content with `<ContentQuery>` was made to
reduce the crowd in the script.

Demo is at [/demo/content-query](/demo/content-query)

### About Document-Driven Mode

We don't use document-driven mode even if it's a website that contains only
markdown content. This is because all it does is to register a page with
catch-all route along with extra queries like `navigation`, `surround` which
could be unncessary in your theme. If you need to render navigation menu etc.,
use `<ContentQuery>` or `queryContent()` queries.

> :warning:
>
> This project contains pages without a corresponding markdown content under
> `/demo` path. When you enable document-driven mode, dynamic pages under
> `/demo` will not work.

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

> :information_source:
>
> `.png` from content images or generated diagrams should be served under
> `.theme/public` but they shouldn't be included in git. To preserve the
> default behaviour while solving this problem, we change public assets folder
> from `.theme/public` to `.theme/.public` via `dir.public` in
> `.theme/nuxt.config.ts` and copy public assets, content images and generated
> diagrams into `.public` during preprocessing.

## Error Page

When we use _Nuxt_ _Content_ components `<ContentDoc>` and `<ContentQuery>`, we
configure the error content with `#not-found` when the component cannot find
the markdown file it is looking for. To keep with the concept of managing the
content of each page with markdown, we get the `#not-found` content from the
`error.md` file.

Demo is at [/demo/error-handling](/demo/error-handling)

> :warning:
>
> If the page is not found in the requests we make with `queryContent()`, we
> trigger nuxt's full page error with `createError()`. See `error.vue` for our
> full page error usage.
