<template>
  <div>
    stringProp: {{ reused.stringProp }}
  </div>
</template>
<script setup lang="ts">
import { Demo } from "types";

defineProps<{ reused: Demo }>();
</script>
