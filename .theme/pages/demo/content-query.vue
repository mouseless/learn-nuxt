<template>
  <div>
    <ContentDoc />
    <ContentQuery
      v-slot="{ data: pages }"
      path="/demo/content-query"
      :where="{ _path: { $ne: $route.path.endsWith('/') ? $route.path.slice(0, -1) : $route.path }}"
    >
      <ContentRenderer
        v-for="page in pages"
        :key="page._path"
        :value="page"
      />
    </ContentQuery>
  </div>
</template>
