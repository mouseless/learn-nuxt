<template>
  <div>
    Full Name: {{ fullName }}
  </div>
</template>
<script setup>
import { computed } from "#imports";

const name = "John";
const fullName = computed(() => `${name} Doe`);
</script>