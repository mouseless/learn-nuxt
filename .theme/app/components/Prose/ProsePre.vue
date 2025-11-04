<template>
  <pre v-if="language !== 'mermaid'" v-bind="props"><slot/></pre>
  <div v-else>
    <Mermaid>
      {{ code }}
    </Mermaid>
  </div>
</template>
<script setup>
const props = defineProps({
  code: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
});
</script>