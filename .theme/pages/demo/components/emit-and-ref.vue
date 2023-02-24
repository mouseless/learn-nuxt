<template>
  <div>
    <ComponentThatEmits @sample-emit="handleEmit" />
    <ComponentWithProps :message="`With ref => ${sampleRef}`" />
    <ComponentWithProps :message="`Without ref => ${sampleLet}`" />
  </div>
</template>
<script setup>
import { ref } from "#imports";

let sampleLet = 0;
const sampleRef = ref(0);
function handleEmit() {
  sampleRef.value++;
  sampleLet++;
}
</script>
