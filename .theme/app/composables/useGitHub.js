import { useRuntimeConfig } from "#app";

export default function() {
  const { public: { gitHubBaseURL: baseURL } } = useRuntimeConfig();

  async function getContributorStats(repository) {
    // Look here for response detail and headers =>
    // https://docs.github.com/en/rest/metrics/statistics?apiVersion=2022-11-28#get-all-contributor-commit-activity
    return await $fetch(
      `repos/${repository}/stats/contributors`,
      {
        baseURL,
        method: "GET",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
  };

  async function getRepository(repository) {
    // Look here for response detail and headers =>
    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
    return await $fetch(
      `repos/${repository}`,
      {
        baseURL,
        method: "GET",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
  };

  async function getOrganization(organization) {
    // Look here for response detail and headers =>
    // https://docs.github.com/en/rest/orgs/orgs?apiVersion=2022-11-28#get-an-organization
    return await $fetch(
      `orgs/${organization}`,
      {
        baseURL,
        method: "GET",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
  };

  return {
    getContributorStats,
    getRepository,
    getOrganization
  };
}
