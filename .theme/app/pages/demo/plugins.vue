<template>
  <div class="flex flex-col">
    <h3>Providing `counter` Helper</h3>
    <div class="flex flex-row items-baseline">
      <p>
        This value will be persisted unless app is refreshed: {{ count }}
      </p>
      <Button class="p-button-sm ml-6 p-0 text-xs h-1/2" @click="increase">
        +
      </Button>
    </div>
    <div class="flex flex-row items-baseline">
      <p>
        This value will be reset everytime the page is rendered: {{ counter.count }}
      </p>
      <Button class="p-button-sm ml-6 p-0 text-xs" @click="counter.increase">
        +
      </Button>
    </div>
  </div>
</template>
<script setup>
const { count, increase } = useNuxtApp().$counter;
const counter = useCounter();
</script>
