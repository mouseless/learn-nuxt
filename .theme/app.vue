<template>
  <NuxtLayout name="default">
    <!-- key is required to overcome hydration and multiple render issues -->
    <NuxtPage :key="$route.path" />
  </NuxtLayout>
</template>
<script setup>
import { provide } from "vue";
import { useRoute } from "#imports";

provide("route", useRoute().path);
</script>
