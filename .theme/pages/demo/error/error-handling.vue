<template>
  <div>
    <button @click="throwError">
      Throw Error
    </button>
  </div>
</template>
<script setup>
import { createError } from "#app";

function throwError() {
  throw createError({ statusCode: 500, statusMessage: "Status Message", fatal: true });
}
</script>
