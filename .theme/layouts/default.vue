<template>
  <div class="App">
    <header>
      <nav class="App__nav">
        <router-link to="/">
          Home
        </router-link> |
        <router-link to="/contribution-guide">
          Contribution
        </router-link> |
        <router-link to="/prebuild">
          Prebuild
        </router-link>
      </nav>
    </header>
    <slot />
  </div>
</template>
