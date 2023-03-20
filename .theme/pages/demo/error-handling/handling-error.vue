<template>
  <div>
    <ContentRenderer :value="index" />
  </div>
</template>
<script setup>
import { queryContent } from "#imports";
import { createError } from "#app";

let index;

// Searching for a non-existent markdown
try{
  index = await queryContent("/demo/non-exist-mardown")
    .findOne();
}
catch
{
  throw createError({ statusCode:404, statusMessage:"demo error handling", fatal:true });
}
</script>
