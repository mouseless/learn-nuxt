<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { joinURL } from "ufo";

const config = useRuntimeConfig();

useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: joinURL(config.public.baseUrl, "favicon.ico")
    }
  ]
});
</script>