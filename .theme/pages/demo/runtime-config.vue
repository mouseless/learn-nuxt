<template>
  <div>
    <h1>Runtime Config</h1>
    BaseUrl: {{ config.public.baseURL }}
  </div>
</template>

<script setup>
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
</script>