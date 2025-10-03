<template>
  <div>
    Message: {{ message }}
  </div>
</template>
<script setup lang="ts">
defineProps<{
  message: string
}>();
</script>
