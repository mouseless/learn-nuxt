<template>
  <div>
    <p><strong>Error Status Code:</strong> {{ error.statusCode }}</p>
    <p><strong>Error Message:</strong> {{ error.statusMessage }}</p>
    <button @click="handleError">
      Clear errors and route home
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