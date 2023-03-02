<template>
  <div>
    <header>
      <nav>
        <ContentQuery
          v-slot="{ data: menus }"
          path="/"
          :where="{ _dir: { $eq: '' } }"
        >
          <NuxtLink
            v-for="menu in menus"
            :key="menu.path"
            to="/"
          >
            {{ menu.title }}
          </NuxtLink>
        </ContentQuery>
      </nav>
    </header>
    <slot />
  </div>
</template>