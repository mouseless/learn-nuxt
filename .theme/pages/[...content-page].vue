<template>
  <div>
    <ContentDoc />
  </div>
</template>
<script setup>
import { useRuntimeConfig } from "#app";
import { useRoute } from "#imports";

const route = useRoute();
const articles = await queryContent(route.path).findOne();
const runtimeConfig = useRuntimeConfig();

const dir = computed(() => {
  if(articles._dir !== "") {
    return runtimeConfig.public.baseURL.concat(articles._dir).concat("/");
  }
  return runtimeConfig.public.baseURL;
});

useHead({
  base: { href: dir }
});
</script>
