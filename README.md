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

File name is automatically the route name e.g. `.theme/pages/demo/static.vue`
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

## Content

Content of a web site is markdown files that are placed at the root of to give
focus on more to content than its theme layout.

### Content Page

Content page is a page that uses `<ContentDoc />` which renders given markdown
content as html. It is at `.theme/pages/[[content-page]].vue` which has a
dynamic route to handle any markdown file.

### Linking to Another Content Page

To link to another page, simply link to its markdown file in `[Link
to](other-file.md)` format as demonstrated below;

- [Other Content](other-content.md)

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

## Prose Components

Prose components are wrappers of html tags that are used to render markdown
content. When you want to change the way nuxt renders markdown you need to
override a prose component.

To override a prose, let's say `<table>`, browse to [Nuxt Content /
Prose](https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/)
and copy corresponding component, `ProseTable.vue` in this case, and place it
under exactly the same path `.theme/components/Prose/`, and make any change you
want.

Below is a demonstration of overriding `ProseTable.vue`;

| Override | This  | Table      |
| ---      | ---   | ---        |
| Using    | Prose | Components |

## Provide & Inject

When you need to access a data that cannot be passed to a component (such as
prose components), we use `provide` and `inject` functions. Basically you
`provide` a value in a parent component to be `inject`ed in any child
components.

```mermaid
flowchart TB
    subgraph C[Components]
        direction TB

        C_P[Page]
        C_CD[&ltContentDoc/&gt]
        C_PA[ProseA]
        C_P -- renders --> C_CD -- uses --> C_PA
    end

    D([data])

    C_P -. provides .-> D -. injected to .-> C_PA
```

Demo is at [/demo/provide-and-inject](/demo/provide-and-inject)

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

### Replace Content

This task (`.theme/prebuild/tasks/replaceContent.js`) replaces given old text
to new text in files with given extension. We used this one to replace
`README.md` with `index.md` before fixing links.
