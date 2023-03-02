<template>
  <div class="App">
    <header>
      Logo here
    </header>
    <nav class="menu">
      <ul class="App__nav">
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/setup-guide">
            Setup Guide
          </router-link>
        </li>
        <li>
          <router-link to="/build-and-run">
            Build &amp; Run
          </router-link>
        </li>
        <li>
          <router-link to="/content">
            Content
          </router-link>
        </li>
        <li>
          <router-link to="/pages">
            Pages
          </router-link>
        </li>
        <li>
          <router-link to="/template-syntax">
            Template Syntax
          </router-link>
        </li>
        <li>
          <router-link to="/components">
            Components
          </router-link>
        </li>
        <li>
          <router-link to="/routing">
            Routing
          </router-link>
        </li>
        <li>
          <router-link to="/configuration">
            Configuration
          </router-link>
        </li>
        <li>
          <router-link to="/contributing">
            Contribution Guide
          </router-link>
        </li>
      </ul>
    </nav>
    <article>
      <slot />
    </article>
  </div>
</template>
<style scoped>
nav {
  width: 250px;
  position: fixed
}
article {
  padding-left: 250px;
}
</style>
