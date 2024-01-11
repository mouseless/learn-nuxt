import { joinURL } from "ufo";

const learnNuxtBaseUrl = "https://api.github.com/repos/mouseless/learn-nuxt";

export const fetchCommits = async() => {
  // This will work only client side
  const contributors = await $fetch(
    joinURL(learnNuxtBaseUrl, "/stats/contributors"),
    { method: "GET", lazy: true, server: false }
  );

  return contributors;
};
