<template>
  <ContentRenderer v-if="doc" :value="doc" />
  <ContentRenderer v-else :value="notFound" />
</template>
<script setup>
import { useRoute } from "#imports";

const route = useRoute();

const doc = await queryCollection("content").path(route.path).first();
const notFound = await queryCollection("notFound").first();
</script>