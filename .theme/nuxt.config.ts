import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      content: {
        anchorLinks: {
          depth: 0,
        },
      },
    },
  },
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: "Welcome to mouseless",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://mouseless.github.io/learn-nuxt/favicon.ico",
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "50",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "50",
        }
      ]
    }
  },
  modules: [
    "@nuxt/content"
  ],
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": false,
      },
    },
  },
  components: {
    dirs: [
      { global: true , path: "~/components/Prose" },
      "~/components",
    ]
  },
  dir: {
    public: ".public",
  }
});
