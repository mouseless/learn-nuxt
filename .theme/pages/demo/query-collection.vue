<template>
  <ContentRenderer :value="index" />
  <ContentRenderer
    v-for="page in pages"
    :key="page.title"
    :value="page"
  />
</template>
<script setup>
import { queryCollection } from "#imports";

// query index page
const index = await queryCollection("content")
  .path("/demo/query-collection")
  .first();

// filter out index page to avoid rendering it twice
const pages = await queryCollection("content")
  .where("path", "LIKE", "/demo/query-collection/%")
  .all();
</script>
