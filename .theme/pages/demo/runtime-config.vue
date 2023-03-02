<template>
  <div>
    <h1>Runtime Config</h1>
    <code v-pre>{{ runtimeConfig.public.baseURL }}</code> =
    {{ runtimeConfig.public.baseURL }}
  </div>
</template>

<script setup>
import { useRuntimeConfig } from "#app";

const runtimeConfig = useRuntimeConfig();
</script>