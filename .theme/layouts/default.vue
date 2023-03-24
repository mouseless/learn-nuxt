<template>
  <div>
    <header>
      <div class="logo">
        <NuxtLink to="/">
          <img src="https://raw.githubusercontent.com/mouseless/brand/main/assets/logo/svg/logo-full-primary.svg">
        </NuxtLink>
        <span class="separator" />
        <NuxtLink
          to="https://nuxt.com"
          target="_blank"
        >
          <img src="https://nuxt.com/assets/design-kit/logo/full-logo-green-dark.svg">
        </NuxtLink>
      </div>
      <nav>
        <ContentQuery
          v-slot="{ data: menus }"
          path="/"
          :only="[ '_path', 'title', 'position' ]"
          :where="{ _dir: { $eq: '' }, _path: { $ne: '/' }, position: { $exists: true } }"
          :sort="sort"
        >
          <NuxtLink
            v-for="menu in menus"
            :key="menu.title"
            :to="menu._path == $route.path ? '' : menu._path"
            :class="menu.position < 100 ? 'left' : 'right'"
          >
            {{ menu.title }}
          </NuxtLink>
        </ContentQuery>
      </nav>
    </header>
    <article>
      <slot />
    </article>
  </div>
</template>
<script setup lang="ts">
const sort = {
  position: 1,
  $numeric: true
};
</script>
<style scoped lang="scss">
header, article {
  max-width: 1000px;
  margin: auto;
  padding: 0 10px;
}
article {
  padding-top: 10px;
}
.logo {
  margin: 20px 0;
}
.logo .separator {
  display: inline-block;
  margin: 0 15px;
  border-right: solid 2px lightgray;
}
.logo img, .logo .separator {
  height: 25px;
}
nav a {
  margin: 5px;
}

@media (max-width: 800px) {
  .logo img, .logo .separator {
    height: 15px;
  }
  nav a {
    display: block;
  }
}
a.left+a.right {
  padding-left: 10px;
  border-left: solid 1px black;
}
</style>
