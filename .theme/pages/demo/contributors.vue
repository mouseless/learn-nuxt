<template>
  <div class="root">
    <div v-for="contributor in contributors" :key="contributor.author.login">
      <div class="card">
        <img class="profile-image" :src="contributor.author.avatar_url">
        <h3>{{ contributor.author.login }}</h3>
        <p><strong>Total commits:</strong> {{ contributor.total }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const contributors = await $fetch(
  "https://api.github.com/repos/mouseless/learn-nuxt/stats/contributors"
);
</script>
<style>
.root {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
  margin: 20px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 8px;
}
</style>
