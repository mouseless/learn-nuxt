---
position: 99
---

# Using Scss

Here you can find how to use Scss in nuxt, to learn about Scss syntax check out
our [Learn Sass Branch](https://github.com/mouseless/learn-css/pull/2).

## Style With Scss

To style a component using Scss you can refer to
`./theme/components/ComponentWithScss.vue`

Demo is at [/demo/scss/style-with-scss](/demo/scss/style-with-scss)

## Adding & Using Global Variables

To add global variables create an `assets` folder at the root of your project
and add `variables.scss` file. In this file global variables can be created.
When creating variables you can refer to `./theme/assets/variables.scss`.

To use the global variables simply use the variables created in
`variables.scss` without importing. You can refer to
`./theme/components/ComponentWithGlobalVariable.vue`.

> :warning:
>
> You need to use a sass-loader and configure `nuxt.config.ts` for global
> variables to work.

Demo is at [/demo/scss/global-variables](/demo/scss/global-variables)

## Global Style

To add a global style create `styles.scss` file in your assets folder and add
styles as can be seen in `./theme/assets/styles.scss`. Global styles will work
like a default style, only when the specific style is not given in the
component.

> :warning:
>
> You need to specify the `styles.scss` as global style in `nuxt.config.ts`