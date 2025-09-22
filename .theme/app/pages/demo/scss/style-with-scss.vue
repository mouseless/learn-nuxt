<template>
  <div class="basic">
    Styled with Scss
  </div>
</template>
<style lang="scss">
$justify-content-default: center;
.basic {
  display: flex;
  justify-content: $justify-content-default;
  background-color: beige;
  font: {
    size: 2rem;
    family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
}
</style>
