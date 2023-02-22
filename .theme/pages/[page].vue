<template>
  <div>
    This is a dynamic page
    <div>
      <code v-pre>{{ $route.params.page }}</code> renders; <code>{{ $route.params.page }}</code>
    </div>
  </div>
</template>
