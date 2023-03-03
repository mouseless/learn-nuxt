<template>
  <div>
    Page with dynamic route with an optional parameter
    <div>
      <code v-pre>{{ $route.params.page }}</code> is '<code>{{ $route.params.page }}</code>'
    </div>
  </div>
</template>
