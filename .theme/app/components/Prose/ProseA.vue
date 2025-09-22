<template>
  <NuxtLink
    :href="computedHref"
    :target="props.target"
  >
    <slot />
  </NuxtLink>
</template>
<script setup>
import { joinURL } from "ufo";
import { computed, useRoute } from "#imports";

const props = defineProps({
  href: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: "_self", // "_blank", "_self", "_parent", "_top"
    required: false
  }
});

const route = useRoute();

const computedHref = computed(() => {
  if(props.href.startsWith("/")) { return props.href; }

  return route.path.endsWith("/") ? joinURL("../", props.href) : props.href;
});
</script>