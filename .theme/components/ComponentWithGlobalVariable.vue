<template>
  <div class="global">
    Component styled with Scss using global variable
  </div>
</template>
<style lang="scss">
.global {
  display: flex;
  justify-content: center;
  font-size: $font-size-default;
  font-family: $font-family-dafault;
  background-color: $theme-color-default;
}
</style>