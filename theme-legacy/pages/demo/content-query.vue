<template>
  <div>
    <ContentDoc />
    <ContentQuery
      v-slot="{ data: pages }"
      path="/demo/content-query"
      :where="{ _path: { $ne: $route.path }}"
    >
      <ContentRenderer
        v-for="page in pages"
        :key="page.path"
        :value="page"
      />
    </ContentQuery>
  </div>
</template>
