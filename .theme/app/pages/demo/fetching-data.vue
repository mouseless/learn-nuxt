<template>
  <div class="flex flex-wrap content-center justify-start items-center">
    <div>
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
      <div class="flex flex-wrap content-center justify-start items-center">
        <div
          v-for="contributor in contributors"
          :key="contributor.author.login"
        >
          <div class="p-sm text-center justify-start m-5">
            <img class="w-24 h-24 rounded-sm mb-2" :src="contributor.author.avatar_url">
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
const { data: organization } = await useAsyncData("organization", async() => await getOrganization(organizationName));

// Fetch Once - Only Client
onBeforeMount(async() => repository.value = await getRepository(repositoryFullName));

// Fetch Twice - Server and Client
onServerPrefetch(async() => contributors.value = await getContributorStats(repositoryFullName));
onBeforeMount(async() => contributors.value = await getContributorStats(repositoryFullName));
</script>
