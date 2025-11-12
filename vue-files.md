---
position: 3
---

# Vue Files

Here you can find how we use template syntax in vue files.

## Variable

Variables can be created as shown in `.theme/app/pages/demo/variable`.

Demo is at [/demo/variable](/demo/variable).

> [!NOTE]
>
> We are using __Composition__ __API__ with setup in nuxt and in demos.

### Escape Curly Braces

To escape curly braces use `v-pre` as shown in
`.theme/app/pages/demo/escape-curly-braces.vue`.

Demo is at [/demo/escape-curly-braces](/demo/escape-curly-braces).

## Computed

Computed properties can be created as shown in
`.theme/app/pages/demo/computed/index.vue`.

Demo is at [/demo/computed](/demo/computed).

> [!NOTE]
>
> Computed properties are evaluated only once while functions will be
> re-evaluated every time they are called.

### With Ref

Ref can be used with computed properties, this results in an automatic
re-rendering after a single re-evaluation when dependencies have changed. Ref
can be used in computed properties as shown in
`.theme/app/pages/demo/computed/with-ref.vue`

Demo is at [/demo/computed/with-ref](/demo/computed/with-ref)

## Style

Here you will find how we use CSS in Nuxt. To see our conventions and learnings
for CSS, check out the [learn-css](https://github.com/mouseless/learn-css)
repository.

### Setting Up a Theme System

To set up a theme system, we need TailwindCSS, brand theme and a couple of
`.css` files.

__First__, make sure you installed `tailwindcss` and `@tailwindcss/vite`
packages in your project. Then configure Tailwind in your nuxt project as in
`.theme/nuxt.config.ts`.

__Second__, create `theme.css` and `components.css` to customize your theme.
Place these files in `.theme/assets/` folder and add them to `css` array in
`.theme/nuxt.config.ts`.

`theme.css` sets up TailwindCSS and any other style dependencies. Use `@import`
at-rules to import your files.

```css
@import "https://brand.mouseless.codes/assets/css/default.css";
@import "tailwindcss/theme" layer(theme);
@import "tailwindcss/preflight" layer(base);
@import "tailwindcss/utilities" layer(utilities);
```

> [!NOTE]
>
> In this example our brand css already has its styles in a layer called `@layer
> brand` so it doesn't use a layer explicitly while importing"

CSS requires layer orders to be stated before any layer is declared. Otherwise
it will process the layers in the order they are loaded. In this case brand css
has to be loaded before tailwind's preflight, but preflight has to be ordered
before to act as a base.

__Finally__, create a `layers.css` in `.theme/public/` folder and add it in
`.theme/nuxt.config.ts` to make sure it is loaded before any `@layer` is
declared in css files. This file only sets the preferred order for the layers,
e.g., `@layer base, brand, theme, utilities;`.

The reason `layer.css` is in a separate file is that PostCSS processes the css
files and moves `@import` declarations to the top most even before `@layer`
order statements. So it becomes impossible for any remote css to get its layers
ordered in a processed css file. To workaround this, we use a non-processed
`layers.css` file .

> [!WARNING]
>
> Importing preflight css before brand css won't help, because PostCSS processes
> `.theme/assets/theme.css` and removes local `@import` at-rules. So this leaves
> brand css import as the only real import. Since CSS requires `@import` as the
> first statement in a CSS files it becomes impossible to place any remote css
> import statement after preflight.

### Theme Variables

To add theme variables use `.theme/assets/theme.css` file. Add any theme
variable under `:root { ... }` scope right after `@import` statements.

To make your variables available in tailwind utilities use `@theme` special
at-rule of tailwindcss. You'll need to re-assign your existing variables in
there to make sure tailwind recognizes your custom rules. Have a look at
`.theme/assets/theme.css` to see how we've set up variables from our brand css
to tailwind's utilities.

Demo is at [/demo/css/theme-variables](/demo/css/theme-variables)

### Using Utilities

To style a component using Tailwind you can refer to
`./theme/app/pages/demo/css/using-utilities.vue`. And use Tailwind classes as
can be seen in the file.

Demo is at [/demo/css/using-utilities](/demo/css/using-utilities)

### Using Components

When you need to different styles to child elements of your components, but the
child elements are not in the components such as content tags from markdown
files `p`, `h1` etc., place a marker class starting with `c--` prefix and then
use `.theme/assets/components.css` to apply tailwind utility classes to the
elements under the marker component class.

Demo is at [/demo/css/using-components](/demo/css/using-components)

## Handling Errors

We use `error.vue` file to configure default full page error that nuxt shows
when it can't find the page it wants to load. See `error.vue` for an example.

### Using `clearError()`

When we want to return to another page from the error page, we clear the errors
with `clearError()` and give the page we want with the redirect parameter. See
`error.vue` for an example.

### Using `createError()`

We use `createError()` to create an error. It redirects to `error.vue` when
`fatal` is set to `true`.

Demo is at [/demo/error/error-handling](/demo/error/error-handling)
