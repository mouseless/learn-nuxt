<template>
  <blockquote :class="type" class="pl-4 border-l-4 border-solid ml-4">
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
  return slot.value[0].children.default()[0].children[0].children;
});

const types = {
  "!NOTE": "info",
  "!WARNING": "warning",
  "!TIP": "success"
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
.info {
  border-color: var(--color-blue-n1);
}
.warning {
  border-color: var(--color-orange-0);
}
.success {
  border-color: var(--color-green-n1);
}
.default {
  border-color: var(--color-fg);
}
</style>
