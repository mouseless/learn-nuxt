<template>
  <div>
    <ContentRenderer :value="index" />
  </div>
</template>
<script setup>
import { showError } from "#app";
import { queryContent } from "#imports";

let index;

// Searching for a non-existent markdown
try{
  index = await queryContent("/demo/non-exist-mardown")
    .findOne();
} catch {
  throw showError({ statusCode: 404, statusMessage: "demo error handling", fatal: true });
}
</script>
