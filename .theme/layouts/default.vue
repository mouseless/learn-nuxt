<template>
  <div class="App">
    <header>
      <nav class="App__nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/contribution-guide">Contribution</router-link>
      </nav>
      <slot/>
      <router-view/>
    </header>
  </div>
</template>
<style>

</style>