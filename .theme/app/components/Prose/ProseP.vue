<template>
  <p>
    <slot />
    <span v-if="providedData"> (provided data injected)</span>
  </p>
</template>
<script setup>
import { inject } from "vue";

const providedData = inject("provided-data", false);
</script>
