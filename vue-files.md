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

Here you can find how we use CSS in Nuxt. To see our conventions and learnings
for CSS, check out the [learn-css](https://github.com/mouseless/learn-css)
repository.

### Setting Up a Theme System

...

### Theme Variables

To add global variables create an `assets` folder at the root of your project
and add `variables.scss` file. In this file global variables can be created.
When creating variables you can refer to `./theme/app/assets/variables.scss`.

To use the global variables simply use the variables created in
`variables.scss` without importing.

> [!TIP]
>
> We use `*` when importing the scss module to avoid the namespace requirement.

> [!WARNING]
>
> You need to use a sass-loader and configure `nuxt.config.ts` for global
> variables to work.

Demo is at [/demo/css/theme-variables](/demo/css/theme-variables)

### Using Utilities

You must install `tailwindcss` and `@tailwindcss/vite` packages in your project.
Then configure Tailwind in your nuxt project by following the `nuxt.config.ts`
file in `.theme/nuxt.config.ts`.

To style a component using Tailwind you can refer to
`./theme/app/pages/demo/css/using-utilities.vue`. And use Tailwind classes as can be
seen in the file.

Demo is at [/demo/css/using-utilities](/demo/css/using-utilities)

### Using Components

To style a component using Scss you can refer to
`./theme/app/pages/demo/scss/style-with-scss.vue`

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
