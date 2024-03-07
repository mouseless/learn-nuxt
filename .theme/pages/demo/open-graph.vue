<template>
  <div>
    This is an example of using the Open Graph
  </div>
</template>
<script setup>
const sampleText = part => `Open Graph - ${part}`;

useSeoMeta({
  ogTitle: sampleText("title"),
  ogDescription: sampleText("description")
});
</script>
