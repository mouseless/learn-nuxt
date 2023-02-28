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
import { useContent, useRoute, queryContent } from "#imports";

const route = useRoute();

// useContent is available in documentDriven mode
// it automatically loads index page etc
const { page: index } = useContent();

// filter out index page to avoid rendering it twice
const pages = await queryContent("/demo/querying").where({ _path: { $ne: route.path }}).find();
</script>