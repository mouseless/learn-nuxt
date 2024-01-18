<template>
  <div class="container">
    <div class="organization">
      <h2>Fetch Once - Server or Client</h2>
      <div>
        <strong>Organization:</strong> {{ organization.name }} <br>
        <strong>Public repositories count:</strong> {{ organization.public_repos }}
      </div>
    </div>
    <div class="repository">
      <h2>Fetch Once - Only Client</h2>
      <div>
        <strong>Repository:</strong> {{ repository?.name }} <br>
        <strong>Description:</strong> {{ repository?.description }}
      </div>
    </div>
    <div>
      <h2>Fetch Twice - Server and Client</h2>
      <div class="contributors">
        <div
          v-for="contributor in contributors"
          :key="contributor.author.login"
        >
          <div class="contributor">
            <img class="profile-image" :src="contributor.author.avatar_url">
            <h3>{{ contributor.author.login }}</h3>
            <p><strong>Total commits:</strong> {{ contributor.total }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { getContributorStats, getRepository, getOrganization } = useGitHub();

const organizationName = "mouseless";
const repositoryFullName = `${organizationName}/learn-nuxt`;
const repository = ref([]);
const contributors = ref();

// Fetch Once - Server or Client
const { data: organization } = await useAsyncData(() => getOrganization(organizationName));

// Fetch Once - Only Client
onBeforeMount(async() => repository.value = await getRepository(repositoryFullName));

// Fetch Twice - Server and Client
onServerPrefetch(async() => contributors.value = await getContributorStats(repositoryFullName));
onBeforeMount(async() => contributors.value = await getContributorStats(repositoryFullName));
</script>
<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
}

.contributors {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
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
