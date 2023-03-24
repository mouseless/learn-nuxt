<template>
  <NuxtLayout name="default">
    <!-- key is required to overcome hydration and multiple render issues -->
    <NuxtPage :key="$route.path" />
  </NuxtLayout>
</template>
<script setup>
import { useRoute, navigateTo, onMounted } from "#imports";

const route = useRoute();

onMounted(async () => {
  if (route.path.endsWith("/")) {
    const { path, query, hash } = route;
    const nextPath = path.replace(/\/+$/, "") || "/";
    const nextRoute = { path: nextPath, query, hash };

    // works only if `router.options.strict` is enabled in `nuxt.config.ts`
    // replace prevents browser to record this navigation in its history
    await navigateTo(nextRoute, { replace: true });
  }
});
</script>
