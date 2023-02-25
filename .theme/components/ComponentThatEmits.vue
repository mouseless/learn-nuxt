<template>
  <button @click="clickHandler">
    Click to emit
  </button>
</template>
<script setup>
const emit = defineEmits(["sampleEmit"]);

function clickHandler() {
  emit("sampleEmit");
}
</script>
