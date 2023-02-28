<template>
  <ContentQuery
    v-slot="{ data: pages }"
    path="/demo/querying"
    :where="{ _path: { $ne: route.path }}"
  >
    <ContentRenderer
      v-for="page in pages"
      :key="page.path"
      :value="page"
    >
      <ContentRendererMarkdown :value="page" />
    </ContentRenderer>
  </ContentQuery>
</template>

<script setup>
import { useRoute as route } from "#imports";
</script>