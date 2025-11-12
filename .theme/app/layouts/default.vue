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
            h-(--height-logo) max-md:h-(--height-logo-small)
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
            h-(--height-logo) max-md:h-(--height-logo-small)
          "
        >
      </NuxtLink>
    </div>
    <div class="flex flex-col w-full gap-sm max-md:items-start max-md:text-sm">
      <nav class="flex flex-wrap mx-auto text-center max-md:text-left max-md:m-0">
        <NuxtLink
          v-for="menu in menus.filter(m => m.position < 100)"
          :key="menu.title"
          :to="menu.path == $route.path ? '' : menu.path"
          class="text-fg-soft no-underline m-1 font-normal hover:text-logo-mark"
        >
          {{ menu.title }}
        </NuxtLink>
      </nav>
      <nav class="flex flex-wrap mx-auto text-center max-md:text-left max-md:m-0">
        <NuxtLink
          v-for="menu in menus.filter(m => m.position >= 100)"
          :key="menu.title"
          :to="menu.path == $route.path ? '' : menu.path"
          class="text-fg-soft no-underline m-1 font-normal hover:text-logo-mark"
        >
          {{ menu.title }}
        </NuxtLink>
      </nav>
    </div>
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
