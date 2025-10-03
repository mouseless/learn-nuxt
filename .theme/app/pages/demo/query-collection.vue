<template>
  <ContentRenderer :value="index" />
  <ContentRenderer
    v-for="page in pages"
    :key="page.title"
    :value="page"
  />
</template>
<script setup>
const index = await queryCollection("content")
  .path("/demo/query-collection")
  .first();

const pages = await queryCollection("content")
  .where("path", "LIKE", "/demo/query-collection/%")
  .all();
</script>
