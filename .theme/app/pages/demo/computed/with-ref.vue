<template>
  <div>
    <h1>No Ref</h1>
    <button
      class="px-xs py-1 rounded-xs bg-red-900 hover:bg-red-800 active:text-gray-300"
      @click="changeName"
    >
      Change Name
    </button>
    {{ fullName }}
  </div>
  <div>
    <h1>Ref</h1>
    <button
      class="px-xs py-1 rounded-xs bg-red-900 hover:bg-red-800 active:text-gray-300"
      @click="changeNameRef"
    >
      Change Name
    </button>
    {{ fullNameRef }}
  </div>
</template>
<script setup>
import { ref, computed } from "#imports";

let name = "John";
const changeName = () => name = name === "John" ? "Richard" : "John";
const fullName = computed(() => `${name} Doe`);

const nameRef = ref("John");
const changeNameRef = () => nameRef.value = nameRef.value === "John" ? "Richard" : "John";
const fullNameRef = computed(() => `${nameRef.value} Doe`);
</script>
