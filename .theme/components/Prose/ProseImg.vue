<template>
  <img
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
  >
</template>
<script setup>
import { withBase, joinURL } from "ufo";
import { useRuntimeConfig, computed } from "#imports";

const props = defineProps({
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    return withBase(joinURL("images", props.src), useRuntimeConfig().app.baseURL);
  }

  return joinURL("images", props.src);
});
</script>
