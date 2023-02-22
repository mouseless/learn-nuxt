<template>
  <div>
    {{ description }}
  </div>
</template>

<script setup>
import { useHead } from "#head";

const description = "This is an example of accessing meta with 'useHead' for open graph.";

useHead({
  meta: [
    { hid: "og:title", property: "og:title", content: "title"},
    { hid: "og:description", property: "og:description", content: description },
  ],
});
</script>