<template>
  <div>
    <header>
      <nav>
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
      <slot />
      <router-view />
    </header>
  </div>
</template>