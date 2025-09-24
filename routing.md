---
position: 4
---

# Routing

Here you can learn how we use routing for nuxt projects.

## Index Routes

Index pages are named `index.vue` and can be accessed without a route. For
example; `.theme/app/pages/demo/index.vue` is at `/demo`.

Demo is at [/demo](/demo).

## Static Routes

File name is automatically the route name e.g.
`.theme/app/pages/demo/static.vue` is at `/demo/static`

Demo is at [/demo/static](/demo/static).

## Dynamic Routes

To create a dynamic page you need to surround the page with '[]' e.g.
`.theme/app/pages/demo/[page].vue`. To make it optional surround it with `[[]]`
e.g. `.theme/app/pages/demo/optional/[[page]].vue`. To have a dynamic route that
can handle any depth in a path we use catch all routes e.g.
`.theme/app/pages/demo/catch-all/[...page].vue`.

- Dynamic route:
  - [/demo/dynamic-1](/demo/dynamic-1)
  - [/demo/dynamic-2](/demo/dynamic-2)
- Dynamic route with optional parameter:
  - [/demo/optional](/demo/optional)
  - [/demo/optional/dynamic](/demo/optional/dynamic)
- Catch all route:
  - [/demo/catch-all](/demo/catch-all)
  - [/demo/catch-all/dynamic](/demo/catch-all/dynamic)
  - [/demo/catch-all/with/a/sub/dir](/demo/catch-all/with/a/sub/dir)

## Trailing Slash Problem Workaround

Nuxt generates an `index.html` file under each route and this causes some
static site hosting services, such as GitHub Pages, to add a trailing slash to
urls. When this happens that page fails to load resources with a relative path
because a trailing slash would indicate another directory in a path.

We have this problem with images and links. Since we use dynamic path, it looks
in a different directory due to trailing slash. For images we solved this
problem by making the path absolute in `ProseImg`. For links, we solved it by
merging the link with the parent directory path in `ProseA` for cases where the
route ends with a slash and the link does not start with a slash. See
`/app/components/prose/ProseImg` and `/app/components/prose/ProseA` to see the
solutions.
