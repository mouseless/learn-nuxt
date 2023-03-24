<template>
  <a :href="href" :target="props.target">
    <slot />
  </a>
</template>
<script setup>
const props = defineProps({
  href: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
});
</script>
