<template>
  <div>
    <button @click="handleError">
      Handle Error
    </button>
  </div>
</template>
<script setup>
import { createError } from "#app";

function handleError() {
  throw createError({ statusCode: 404, statusMessage: "Status Message", fatal: true });
}
</script>
