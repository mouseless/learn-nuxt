<template>
  <div>
    {{ title }}
    <br>
    {{ description }}
  </div>
</template>

<script setup>
import { useHead } from "#head";

const description = "Sample Open Graph description";
const title = "Sample Open Graph title";

useHead({
  meta: [
    { hid: "og:title", property: "og:title", content: title},
    { hid: "og:description", property: "og:description", content: description },
  ],
});
</script>