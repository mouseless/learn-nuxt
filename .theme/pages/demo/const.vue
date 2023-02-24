<template>
  <div>
    <p>
      FirstName is a property: {{ firstName }}
    </p>
    <p>
      LastName is a property: {{ lastName }}
    </p>
    <p>
      FulName is: {{ firstName + " " + lastName }}
    </p>
  </div>
</template>

<script setup>
const firstName = "John";
const lastName = "Doe";
</script>