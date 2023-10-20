<template>
  <img
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
  >
</template>
<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo";
import { useRuntimeConfig, computed, useRoute } from "#imports";

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

const route = useRoute();

const refinedSrc = computed(() => {
  if(props.src.startsWith("//")) {
    return props.src;
  }

  const base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
  const path = parsePath(route.path);

  return joinURL(base, path, props.src);
});

function parsePath(path: string) {
  return path.endsWith("/")
    ? path
    : path.replace(/\/[^/]*\/?$/, "");
}
</script>
