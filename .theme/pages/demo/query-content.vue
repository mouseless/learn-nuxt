<template>
  <div>
    <ContentRenderer :value="index" />
    <ContentRenderer
      v-for="page in pages"
      :key="page.title"
      :value="page"
    />
  </div>
</template>

<script setup>
import { useRoute, queryContent } from "#imports";

const route = useRoute();

// query index page
const index = await queryContent("/demo/query-content")
  .where({ _path: { $eq: route.path }})
  .findOne();

// filter out index page to avoid rendering it twice
const pages = await queryContent("/demo/query-content")
  .where({ _path: { $ne: route.path }})
  .find();
</script>
