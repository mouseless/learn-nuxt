<template>
  <div>
    This is an example of using the Open Graph
  </div>
</template>
<script setup>
import { useHead } from "#head";

const sampleText = part => `Open Graph - ${part}`;

useHead({
  meta: [
    { hid: "og:title", property: "og:title", content: sampleText("title")},
    { hid: "og:description", property: "og:description", content: sampleText("description") },
  ],
});
</script>