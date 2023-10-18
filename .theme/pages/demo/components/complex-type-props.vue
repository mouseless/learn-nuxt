<template>
  <div>
    <div>
      <ComponentWithTypedProps :complex="complex" />
    </div>
  </div>
</template>
<script setup lang="ts">
const complex = {
  optional: "Richard",
  required: 20,
};
</script>
