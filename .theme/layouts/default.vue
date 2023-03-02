<template>
  <div>
    <header>
      <div
        style="display: flex;"
      >
        <img
          src="https://raw.githubusercontent.com/mouseless/brand/main/assets/logo/svg/logo-mark-primary.svg"
          height="15"
        > | <img
          src="https://nuxt.com/assets/design-kit/logo/icon-green.svg"
          height="15"
        >
        <nav>
          <ContentQuery
            v-slot="{ data: menus }"
            path="/"
            :where="{ _dir: { $eq: '' } }"
          >
            <NuxtLink
              v-for="menu in menus"
              :key="menu.path"
              :to="menu._path"
              style="margin: 5px;"
            >
              {{ menu.title }}
            </NuxtLink>
          </ContentQuery>
        </nav>
      </div>
    </header>
    <slot />
  </div>
</template>