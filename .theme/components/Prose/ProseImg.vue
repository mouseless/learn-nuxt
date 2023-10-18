<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height">
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

const refinedSrc = computed(() => {
  if(props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL),
    );
    if(_base !== "/" && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }

  if((!props.src.includes("index") && !props.src.includes("README")) && process.env.NODE_ENV === "prerender") {
    const page = purifyPath(route.path).toLowerCase();
    const pureSrc = purifyPath(props.src).toLowerCase();
    if(pureSrc !== page) {
      return props.src;
    }

    // regex rule : folder/page/ => folder
    const updatedPath = route.path.replace(/\/[^/]*\/?$/, "");
    return `${updatedPath}/${props.src}`;
  }

  return props.src;
});

function purifyPath(path: string) {
  // regex rule : clear folder path, '.', '/', '-' and extension
  return path.replace(/.*\/|\d|-|\/|\.[^.]+$|\./g, "");
}
</script>
