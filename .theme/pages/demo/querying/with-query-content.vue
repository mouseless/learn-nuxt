<template>
  <ContentRenderer :value="data" />
</template>

<script setup>
import { queryContent } from "#import";

const data = await queryContent("/content/query").findOne();
</script>