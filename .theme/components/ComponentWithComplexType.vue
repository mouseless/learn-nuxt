<template>
  <div>
    Hello, my name is {{ person.name }} and I am {{ person.age }} years old.
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SimpleType from "../types/SimpleType";

const person = ref<SimpleType>({
  name: "John",
  age: 20
});
</script>
