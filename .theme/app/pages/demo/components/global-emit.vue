<template>
  <div>
    <ComponentThatEmitsGlobally />  👉
    <span v-if="sampleGlobal">✅</span>
    <span v-else>❌</span>
  </div>
</template>
<script setup>
import { useSampleGlobal } from "#imports";

const sampleGlobal = useSampleGlobal();
</script>
