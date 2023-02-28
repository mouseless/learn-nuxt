<template>
  <div>
    <div>
      No ref: <ComponentThatEmits @sample-emit="increment" />  👉 {{ count }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "#imports";

const countRef = ref(0);
const count = computed({
    get() {
    countRef.value++;
    return countRef.value;
  }
});
</script>