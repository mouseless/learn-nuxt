<template>
  <blockquote
    class="pl-4 border-l-4 border-solid ml-4"
    :class="{
      'text-blue-n1': type === 'info',
      'text-orange-0': type === 'warning',
      'text-green-n1': type === 'success',
      'text-fg': type === 'default'
    }"
  >
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
