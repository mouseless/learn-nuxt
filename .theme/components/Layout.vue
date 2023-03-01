<template>
  <header
    class="sticky-top"
  >
    <div class="App">
       <nav class="App__nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/contribution-guide">Contribution</router-link>
        </nav>
      <router-view/>
    </div>
  </header>
</template>
<style>

</style>