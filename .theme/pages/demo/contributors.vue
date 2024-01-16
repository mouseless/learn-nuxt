<template>
  <div class="contributor-container">
    <div v-for="contributor in contributors" :key="contributor.author.login">
      <div class="contributor">
        <img class="profile-image" :src="contributor.author.avatar_url">
        <h3>{{ contributor.author.login }}</h3>
        <p><strong>Total commits:</strong> {{ contributor.total }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: contributors } = await useAsyncData(
  () => fetchContributorsStats(),
  {
    server: false
  }
);
</script>
<style lang="scss">
.contributor-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.contributor {
  padding: 16px;
  text-align: center;
  width: 200px;
  margin: 20px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: var(--border-radius);
  margin-bottom: 8px;
}
</style>
