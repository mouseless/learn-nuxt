<template>
  <div>
    Dynamic page
    <div>
      <code v-pre>{{ $route.params.page }}</code> is '<code>{{ $route.params.page }}</code>'
    </div>
  </div>
</template>
