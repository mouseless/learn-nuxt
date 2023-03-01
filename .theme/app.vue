<template>
  <!-- key is added to avoid multiple rendering after navigation -->
  <NuxtPage :key="`nuxt-page:${$route.path}`" />
</template>
<script setup>
import { useRoute, navigateTo, onMounted } from "#imports";

const route = useRoute();

onMounted(() => {
  if(route.path?.endsWith("/")) {
    // replace prevents browser to record this navigation in its history
    navigateTo(route.path.slice(0, -1), { replace: true });
  }
});
</script>
