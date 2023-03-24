<template>
  <div>
    <ContentDoc />
  </div>
</template>
<script setup>
import { resolveURL } from "ufo";
import { useRuntimeConfig } from "#app";
import { useRoute } from "#imports";

const route = useRoute();
const articles = await queryContent(route.path).findOne();
const runtimeConfig = useRuntimeConfig();

const dir = computed(() => {
  let bUrl = runtimeConfig.public.baseURL;
  if(!bUrl.endsWith("/")) {
    bUrl = bUrl.concat("/");
  }
  if(articles._dir !== "") {
    return resolveURL(runtimeConfig.public.baseURL, articles._dir).concat("/");
  }else{
    return bUrl;
  }
});

useHead({
  base: { href: dir }
});
</script>
