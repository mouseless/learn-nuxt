<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo";
import { useRuntimeConfig, computed, useRoute } from "#imports";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const route = useRoute();
const trailingSlash = computed(
  () => route.path !== "/" && route.path.endsWith("/")
);

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL)
    );
    if (_base !== "/" && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }

  if (!props.src.includes("index") && process.env.NODE_ENV === "prerender") {
    // regex rule : folder/page/ => folder
    const updatedPath = route.path.replace(/\/[^/]*\/?$/, '');
    return `${updatedPath}/${props.src}`;
  }

  return props.src;
});
</script>
