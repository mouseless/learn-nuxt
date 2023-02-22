<template>
  <div>
    {{ description }}
    <br>
    Open the page source code and look at the meta to see the result
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