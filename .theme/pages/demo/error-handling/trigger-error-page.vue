<template>
  <div>
    <ContentRenderer :value="index" />
  </div>
</template>
<script setup>
import { queryContent } from "#imports";
import { showError } from "#app";

let index;

// Searching for a non-existent markdown
try{
  index = await queryContent("/demo/non-exist-mardown")
    .findOne();
}
catch
{
  throw showError({ statusCode:404, statusMessage:"demo error handling", fatal:true });
}
</script>
