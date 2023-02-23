<template>
  <div>
    {{ sampleText("title") }}
    <br>
    {{ sampleText("description") }}
  </div>
</template>

<script setup>
import { useHead } from "#head";

const sampleText = part => `Sample Open Graph ${part}`;

useHead({
  meta: [
    { hid: "og:title", property: "og:title", content: sampleText("title")},
    { hid: "og:description", property: "og:description", content: sampleText("description") },
  ],
});
</script>