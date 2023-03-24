<template>
  <div>
    <ContentDoc />
  </div>
</template>
<script setup>
import { useRoute } from "#imports";

const route = useRoute();
const articles = await queryContent(route.path).findOne();

const dir = computed(() => {
  if(articles._dir !== "") {
    return "/".concat(articles._dir).concat("/");
  }
  return "/".concat(articles._dir);
});

useHead({
  base: { href: dir }
});
</script>
