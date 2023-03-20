<template>
  <div>
    <p>Error Status Code: {{ error.code }}</p>
    <p>Error Message: {{ error.message }}</p>
    <button @click="handleError">
      Clear errors
    </button>
  </div>
</template>
<script setup>
import { clearError } from "#app";
defineProps({
  error: Object
});
const handleError = () => clearError({ redirect: "/" });
</script>