<template>
  <ContentRenderer :value="index" />
  <ContentRenderer
    v-for="page in pages"
    :key="page.title"
    :value="page"
  />
</template>
<script setup>
import { useRoute, queryCollection } from "#imports";

const route = useRoute();

// query index page
const index = await queryCollection("content")
  .path("/demo/query-collection")
  .where({ _path: { $eq: route.path } })
  .first();

// filter out index page to avoid rendering it twice
const pages = await queryCollection("content")
  .path("/demo/query-collection")
  .where({ _path: { $ne: route.path } })
  .all();
</script>
