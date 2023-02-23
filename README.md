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

## Images

To serve static images simply put any `.ico` or `.png` file under
`.theme/images` folder. It will be served at the root path e.g.
`.theme/images/logo.png` will be at `/logo.png`.

Nuxt provides `public` folder for this, but we added that folder to
`.gitignore` because during preprocessing diagrams are copied to that folder as
well.

Demo is at [/demo/images](/demo/images).

## Mermaid Diagrams

We use a preprocessor to generate mermaid diagram images from markdown files.
Below is a demonstration of how to draw a diagram.

```mermaid
flowchart
    A --> B
```

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

### Extract Diagrams

This task (`.theme/prebuild/tasks/extractDiagrams.js`) processes markdown files
and extracts diagrams as `.png` files and modifies markdowns to replace
markdown code with diagram images.

### Fix Links

This task (`.theme/prebuild/tasks/fixLinks.js`) demonstrates how you can
manipulate markdown files befor building. It removes `.md` extension from links
in markdown files so that they both work in markdown and published web site
correctly.

### Move

This task (`.theme/prebuild/tasks/move.js`) moves files with given extension
from source directory to target directory.

### Replace Content

This task (`.theme/prebuild/tasks/replaceContent.js`) replaces given old text
to new text in files with given extension. We used this one to replace
`README.md` with `index.md` before fixing links.
