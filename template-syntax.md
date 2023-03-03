---
position: 3
---

# Template Syntax

Here you can find how we use template syntax.

## Variable

Variables can be created as shown in `.theme/pages/demo/variable`.

Demo is at [/demo/variable](/demo/variable).

> :information_source:
>
> We are using __Composition__ __API__ with setup in nuxt and in demos.

### Escape Curly Braces

To escape curly braces use `v-pre` as shown in
`.theme/pages/demo/escape-curly-braces.vue`.

Demo is at [/demo/escape-curly-braces](/demo/escape-curly-braces).

## Computed

Computed properties can be created as shown in
`.theme/pages/demo/computed/index.vue`.

Demo is at [/demo/computed](/demo/computed).

> :information_source:
>
> Computed properties are evaluated only once while functions will be
> re-evaluated every time they are called.

### With Ref

Ref can be used with computed properties, this results in an automatic
re-rendering after a single re-evaluation when dependencies have changed. Ref
can be used in computed properties as shown in
`.theme/pages/demo/computed/with-ref.vue`

Demo is at [/demo/computed/with-ref](/demo/computed/with-ref)
