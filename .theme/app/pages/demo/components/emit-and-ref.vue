<template>
  <div>
    No ref: <ComponentThatEmits @sample-emit="increment" />  👉 {{ count }}
  </div>
  <div>
    Ref: <ComponentThatEmits @sample-emit="incrementRef" /> 👉 {{ countRef }}
  </div>
</template>
<script setup>
import { ref } from "#imports";

let count = 0;
function increment() {
  count++;
}

const countRef = ref(0);
function incrementRef() {
  countRef.value++;
}
</script>
