<template>
  <button @click="toggle">
    Click to emit globally
  </button>
</template>
<script setup>
import { useSampleGlobal } from "#imports";

const sampleGlobal = useSampleGlobal();
function toggle () {
  sampleGlobal.value = !sampleGlobal.value;
}
</script>
