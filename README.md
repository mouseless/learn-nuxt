# Learn - Nuxt

Here you can find how we use nuxt to create static web pages.

To contribute please read [Contribution Guide](./contribution-guide.md).

## Pages Directory

You can create pages under `.theme/pages/`.

### Index Pages

Index pages are named `index.vue` and can be accessed without a route. For
example; `.theme/pages/demo/index.vue` is at `/demo`.

Demo is at [/demo](/demo).

### Static Routes

File name is automatically the route name e.g.  `.theme/pages/demo/static.vue`
is at `/demo/static`

Demo is at [/demo/static](/demo/static).

### Dynamic Routes

To create a dynamic page you need to surround the page with '[]' e.g.
`.theme/pages/demo/[page].vue`. To make it optional surround it with `[[]]`
e.g. `.theme/pages/demo/optional/[[page]].vue`.

- Dynamic page demo:
  - [/demo/dynamic-1](/demo/dynamic-1)
  - [/demo/dynamic-2](/demo/dynamic-2)
- Optional route page demo:
  - [/demo/optional](/demo/optional)
  - [/demo/optional/dynamic](/demo/optional/dynamic)

## Public Assets

To serve static assets simply put any file under `.theme/public` folder. It
will be served at the root path e.g. `.theme/public/logo.png` will be at
`/logo.png`.

Demo is at [/demo/public-asset](/demo/public-asset).

## Component

To create a component, create a vue file in `.theme/components` directory e.g.
`.theme/components/BasicComponent.vue`. Then use this component in a page as
shown in `./theme/pages/demo/basic-component.vue`.

Demo is at [/demo/basic-component](/demo/basic-component).

## Escape Curly Braces

To escape curly braces use `v-pre` as shown in
`.theme/pages/demo/escape-curly-braces.vue`.

Demo is at [/demo/escape-curly-braces](/demo/escape-curly-braces).

## Preprocessing Markdown Files

We've built a task based `prebuild` mechanism to preprocess markdown files
before nuxt build. This was needed to have pure markdown content at the root of
the repository without the boilerplate code of a nuxt project.

### Fix Links

This task (`.theme/prebuild/tasks/fixLinks.js`) demonstrates how you can
manipulate markdown files befor building. It removes `.md` extension from links
in markdown files so that they both work in markdown and published web site
correctly.
