// import { joinURL } from "ufo";

// const repositoryUrl = "https://api.github.com/repos/mouseless/learn-nuxt";

export const fetchContributorsStats = async() => {
  // Look here for response detail and headers =>
  // https://docs.github.com/en/rest/metrics/statistics?apiVersion=2022-11-28#get-all-contributor-commit-activity
  const result = await $fetch(
    // joinURL(repositoryUrl, "/stats/contributors"),
    "https://webhook.site/2ee08ea1-6d52-4a81-8dc6-e23842c8704b",
    {
      method: "GET",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28"
      }
    }
  );

  return result;
};
