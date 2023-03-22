<template>
  <div>
    optional: {{ complex.optional }}, required: {{ complex.required }}
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  complex: {
    optional?: string,
    required: number
  }
}>(), {
  complex: () => {
    return {
      optional: "default",
      required: 10
    };
  }
});
</script>
