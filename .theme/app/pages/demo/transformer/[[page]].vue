<template>
  <ContentRenderer :value="doc" />
</template>
<script setup>
const doc = await queryCollection("content").path("/demo/transformer").first();
</script>