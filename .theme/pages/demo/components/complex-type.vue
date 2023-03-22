<template>
  <div>
    <div>
      <ComponentWithTypedProps :complex="complex" />
    </div>
  </div>
</template>
<script setup lang="ts">
import DemoType from "../../types/DemoType";

const complex: DemoType = {
  optional: "Richard",
  required: 20
};
</script>
