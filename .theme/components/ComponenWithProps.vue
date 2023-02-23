<template>
  <div>
    {data}
  </div>
</template>

<script> 
const props = defineProps({
  data: {
    type: String,
    default: null
  }
});
</script>