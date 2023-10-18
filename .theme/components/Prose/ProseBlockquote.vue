<template>
  <blockquote :class="type">
    <component :is="() => body" />
  </blockquote>
</template>
<script setup>
import { computed, useSlots } from "#imports";

const slots = useSlots();

const slot = computed(() => {
  // avoids multiple rendering of default slot
  return slots.default();
});

const firstLine = computed(() => {
  // avoids multiple rendering of default slot in children
  return slot.value[0].children.default()[0].children;
});

const types = {
  ":information_source:": "info",
  ":warning:": "warning",
  ":bulb:": "success",
};

const type = computed(() => {
  return types[firstLine.value] ?? "default";
});

const body = computed(() => {
  let result = slot.value;

  if(types[firstLine.value]) {
    // remove first line to avoid rendering it in body
    result = result.slice(1);
  }

  return result;
});
</script>
<style scoped>
blockquote {
  padding-left: 1em;
  border-left: solid 5px;
  margin-left: 1em;
}
.info {
  border-color: var(--color-blue);
}
.warning {
  border-color: var(--color-orange);
}
.success {
  border-color: var(--color-green);
}
.default {
  border-color: var(--color-fg);
}
</style>
