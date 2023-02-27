<template>
  <div>
    Hi query
    <ContentRenderer :value="data" />
  </div>
</template>

<script setup>
import { queryContent } from "../../../node_modules/@nuxt/content/dist/runtime/composables/query";

const data = await queryContent("/content/query").findOne();
</script>