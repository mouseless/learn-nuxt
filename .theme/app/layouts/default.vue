<template>
  <header>
    <div class="logo">
      <NuxtLink to="/">
        <img class="mouseless logo">
      </NuxtLink>
      <NuxtLink
        to="https://nuxt.com"
        target="_blank"
      >
        <img class="nuxt logo">
      </NuxtLink>
    </div>
    <nav>
      <NuxtLink
        v-for="menu in menus"
        :key="menu.title"
        :to="menu.path == $route.path ? '' : menu.path"
        :class="menu.position < 100 ? 'left' : 'right'"
      >
        {{ menu.title }}
      </NuxtLink>
    </nav>
  </header>
  <article>
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
header, article {
  margin: auto;
  padding: 0 1em;
}

header, nav {
  max-width: 1000px;
  text-align: center;

  @media (max-width: 800px) {
    text-align: left;
  }
}

article {
  max-width: var(--width-content);
  padding-top: 1em;
}

img.nuxt:is(.logo) {
  content: url(https://nuxt.com/assets/design-kit/logo-green-black.svg);

  @media (prefers-color-scheme: dark) {
    content: url(https://nuxt.com/assets/design-kit/logo-green-white.svg);
  }
}

div.logo {
  margin: 2em 0;

  a {
    display: inline-flex;
  }
  a+a {
    padding-left: 1em;
  }

  img.logo {
    height: var(--height-logo);
    display: inline;
  }

  @media (max-width: 800px) {
    img.logo {
      height: calc(var(--height-logo) / 2);
    }
  }
}

nav {
  a {
    color: var(--color-fg-soft);
    text-decoration: none;
    margin: 5px;

    &:not(:any-link) {
      font-weight: bold;
    }

    &:hover:any-link {
      color: var(--color-logo-mark);
    }

    @media (max-width: 800px) {
      & {
        display: block;
      }
    }
  }

  a.left+a.right {
    padding-left: 1em;
    @media (max-width: 800px) {
      & {
        padding-top: 1em;
        padding-left: 0;
      }
    }
  }
}

</style>
