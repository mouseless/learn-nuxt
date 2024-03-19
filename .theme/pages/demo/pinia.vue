<template>
  <div>Titles: {{ store.titles }}</div>
</template>
<script setup>
import { usePiniaStore } from "~/store/piniaStore";

const store = usePiniaStore();
const titles = ["title1", "title2", "title3"];

if(store.titles.length === 0) {
  store.setTitles(titles);
}
</script>
