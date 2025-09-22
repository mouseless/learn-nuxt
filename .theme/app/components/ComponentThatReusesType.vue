<template>
  <div>
    stringProp: {{ reused.stringProp }}
  </div>
</template>
<script setup lang="ts">
import type { Demo } from "~~/types";

defineProps<{ reused: Demo }>();
</script>
