<template>
  <div class="class-with-global-variable">
    Component styled with Scss using global variable
  </div>
</template>
<style lang="scss">
.class-with-global-variable {
  display: flex;
  justify-content: $justify-content-default;
  background-color: $theme-color-default;
  font: {
    size: $font-size-default;
    family:$font-family-dafault;
  }
}
</style>