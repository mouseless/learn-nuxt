<template>
  <ContentDoc />
</template>
<script setup>
import { provide } from "vue";

provide("provided-data", true);
</script>
