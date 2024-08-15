<template>
  <ComponentWithTypedProps :complex="complex" />
</template>
<script setup lang="ts">
const complex = {
  optional: "Richard",
  required: 20
};
</script>
