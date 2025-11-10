<template>
  <header
    class="
      m-auto pt-0 px-sm
      text-center max-md:text-left
      max-w-(--max-width-content)
    "
  >
    <div
      class="
        flex justify-center max-md:justify-start
        gap-sm my-md mx-0 [&>a+a]:pl-sm]
      "
    >
      <NuxtLink to="/">
        <img
          class="
            mouseless logo
            h-(--height-logo)! max-md:h-(--height-logo-small)!
          "
        >
      </NuxtLink>
      <NuxtLink
        to="https://nuxt.com"
        target="_blank"
      >
        <img
          class="
            nuxt logo
            h-(--height-logo)! max-md:h-(--height-logo-small)!
          "
        >
      </NuxtLink>
    </div>
    <nav
      class="
        m-auto text-center max-md:text-left
        max-w-(--max-width-content)
        [&>a.left+a.right]:pl-8 [&>a.left+a.right]:max-md:pl-0
      "
    >
      <NuxtLink
        v-for="menu in menus"
        :key="menu.title"
        :to="menu.path == $route.path ? '' : menu.path"
        :class="menu.position < 100 ? 'left' : 'right'"
        class="text-fg-soft no-underline m-1 font-normal hover:text-logo-mark max-md:block"
      >
        {{ menu.title }}
      </NuxtLink>
    </nav>
  </header>
  <article class="m-auto pt-0 px-sm pt-sm max-w-(--width-content)">
    <slot />
  </article>
</template>
<script setup lang="ts">
const menus = await queryCollection("headers")
  .where("position", "IS NOT NULL")
  .order("position", "ASC")
  .all();
</script>
<style scoped lang="scss">
img.nuxt:is(.logo) {
  content: url(https://nuxt.com/assets/design-kit/logo-green-black.svg);

  @media (prefers-color-scheme: dark) {
    content: url(https://nuxt.com/assets/design-kit/logo-green-white.svg);
  }
}
</style>
