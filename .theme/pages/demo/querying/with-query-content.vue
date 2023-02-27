<template>
  <div>
    Hi query
    <ContentDoc />
  </div>
</template>

<script setup>
import { queryContent } from "../../../node_modules/@nuxt/content/dist/runtime/composables/query";

const data = queryContent("/");

console.log(data);
</script>