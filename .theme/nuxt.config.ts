import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      content: {
        anchorLinks: {
          depth: 0
        }
      },
    }
  },
  app: {
    baseURL: process.env.BASE_URL?.startsWith("/")
      ? process.env.BASE_URL
      : `/${process.env.BASE_URL}`,
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
          content: "http://localhost:3000/logo.png",
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "270",
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "64",
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
      "~/components"
    ]
  },
  dir:{
    public:".public"
  }
});
