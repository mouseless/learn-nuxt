<template>
  <div>
    This is a dynamic optional page
    <div>
      <code v-pre>{{ $route.params.page }}</code> renders; <code>{{ $route.params.page }}</code>
    </div>
  </div>
</template>
