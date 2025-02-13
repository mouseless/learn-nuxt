<template>
  <ContentRenderer :value="doc" />
</template>
<script setup>
import { provide } from "vue";

provide("provided-data", true);

const doc = await queryCollection("content")
  .path("/demo/provide-and-inject")
  .first();
</script>
