<template>
  <div>
    optional: {{ complex.optional }}, required: {{ complex.required }}
  </div>
</template>
<script setup lang="ts">
import DemoType from "../types/DemoType";

withDefaults(defineProps<{
  complex: DemoType
}>(), {
  complex: () => {
    return {
      optional: "default",
      required: 10
    };
  }
});
</script>
