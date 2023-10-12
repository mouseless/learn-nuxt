<template>
  <!--
    when reloaded in browser, any non-content page also lands here because
    there is a trailing slash in url. it shows 'not found' slot for a moment
    because a corresponding .md file does not exist, so it should render only
    when there is no trailing slash to avoid unnecessary 'not found' display
  -->
  <ContentDoc v-if="!trailingSlash">
    <template #not-found>
      <!-- To avoid duplicate og meta data -->
      <ContentDoc path="/not-found" :head="false" />
    </template>
  </ContentDoc>
</template>
<script setup>
import { useRoute, navigateTo, onMounted } from "#imports";

const route = useRoute();
const trailingSlash = route.path !== "/" && route.path.endsWith("/");

onMounted(async () => {
  if(trailingSlash) {
    const { path, query, hash } = route;
    const nextPath = path.replace(/\/+$/, "");
    const nextRoute = { path: nextPath, query, hash };

    // works only if `router.options.strict` is enabled in `nuxt.config.ts`
    // replace prevents browser to record this navigation in its history
    await navigateTo(nextRoute, { replace: true });
  }
});
</script>
