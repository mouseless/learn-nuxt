<template>
  <div>
    <ContentDoc :path="docPath" />
  </div>
</template>
<script setup>
import { useRoute } from "#imports";

const docPath = computed(() => {
  const x = useRoute().path;
  return x;
});
</script>
