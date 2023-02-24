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
  components: {
    dirs: [
      { global: true , path: "~/components/Prose" },
      "~/components"
    ]
  },
  vite: {
    publicDir: ".public"
  }
});
