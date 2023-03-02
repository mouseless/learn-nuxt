<template>
  <div>
    <header>
      <img
        src="https://raw.githubusercontent.com/mouseless/brand/main/assets/logo/svg/logo-mark-primary.svg"
        height="10"
      > | <img
        src="https://nuxt.com/assets/design-kit/logo/icon-green.svg"
        height="10"
      >
      <nav>
        <ContentQuery
          v-slot="{ data: menus }"
          path="/"
          :where="{ _dir: { $eq: '' } }"
        >
          <ul>
            <li
              v-for="menu in menus"
              :key="menu.path"
            >
              <NuxtLink
                :to="menu._path"
              >
                | {{ menu.title }} |
              </NuxtLink>
            </li>
          </ul>
        </ContentQuery>
      </nav>
    </header>
    <slot />
  </div>
</template>