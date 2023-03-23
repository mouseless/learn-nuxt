<template>
    <img :src="refinedSrc" :alt="alt" :width="width" :height="height"/>
</template>

<script setup>
import { withBase } from "ufo";
import { inject } from "vue";
import { useRuntimeConfig, computed } from "#imports";

const route = inject("route", useRuntimeConfig().app.baseURL);

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
  if(route !== "/" && route.toString().endsWith("/") && props.src.startsWith(".")) {
    return ".".concat(props.src);
  }
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    return withBase(props.src, useRuntimeConfig().app.baseURL);
  }
  return props.src;
});
</script>
