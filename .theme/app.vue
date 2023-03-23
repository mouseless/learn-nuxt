<template>
  <NuxtLayout name="default">
    <!-- key is required to overcome hydration and multiple render issues -->
    <NuxtPage :key="$route.params.slug" />
  </NuxtLayout>
</template>
<script setup>
</script>
