<template>
  <ContentDoc>
    <template #not-found>
      <!-- To avoid duplicate og meta data -->
      <ContentDoc path="/not-found" :head="false" />
    </template>
  </ContentDoc>
</template>
