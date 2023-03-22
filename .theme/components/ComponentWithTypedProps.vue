<template>
  <div>
    optional: {{ complex.optional }}, required: {{ complex.required }}
  </div>
</template>
<script setup lang="ts">
import DemoInterface from "../types/IDemoInterface";

withDefaults(defineProps<{
  complex: DemoInterface
}>(), {
  complex: () => {
    return {
      optional: "default",
      required: 10
    };
  }
});
</script>
