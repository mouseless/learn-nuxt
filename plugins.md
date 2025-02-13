---
position: 9
---

# Plugins

We use [Nuxt Plugins][0] when adding app-level functionality. Plugins provide
better configurability and helps keeping `app.vue` setup cleaner. To create a
plugin, create a directory named `plugins` and files which are located in this
directory will be autmatically registered. We prefer using object syntax to
create a plugin. Demo is at [/demo/plugins](/demo/plugins).

```js
export default defineNuxtPlugin({
  name: "demo",
  setup () {
    ...
  },
  hooks:{
    ...
  }
})
```

> [!NOTE]
>
> Files which are not located in the root `/plugins` directory are not
> automatically registered, they should be added in `nuxt.config` manually

## Nuxt Runtime Hooks

We can register to `Nuxt` runtime hooks to provide functionality such as
handling exceptions.

```js
hooks: {
  'app:error'(error) {
      ...
  }
}

```

## Providing Helpers

Helpers can be provided on `nuxtApp` and can be accessed by `nuxtApp.${helper}`
name. Use the sample below to provide helpers on `nuxtApp` instance.

```js
// plugin
setup() {

const counter = useCounter(); // custom composable

return {
    provide: {
      counter
    }
  }
}

// index.vue
<script setup>
const counter = useNuxtApp().$counter
</script>
```

[0]: https://nuxt.com/docs/guide/directory-structure/plugins