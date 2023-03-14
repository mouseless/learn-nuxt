<template>
  <div>
    Message: {{ message }}
  </div>
</template>
<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
});
</script>
