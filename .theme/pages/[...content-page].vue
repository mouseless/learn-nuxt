<template>
  <div>
    <ContentDoc>
      <template #not-found>
        <ContentDoc path="/not-found" />
      </template>
    </ContentDoc>
  </div>
</template>
<!--
<script setup>
import { withoutTrailingSlash } from "ufo";
import { useRoute } from "#imports";

const route = useRoute();

const path = withoutTrailingSlash(route.path);

console.log(route.path);
console.log(path);
</script>
-->
