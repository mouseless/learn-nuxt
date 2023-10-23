import { joinURL } from "ufo";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: joinURL(process.env.NUXT_PUBLIC_BASE_URL ?? "/", "favicon.ico")
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://mouseless.github.io/brand/assets/css/default.css"
        }
      ],
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: "Welcome to mouseless"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://mouseless.github.io/learn-nuxt/favicon.ico"
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "50"
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "50"
        }
      ]
    }
  },
  components: {
    dirs: [{ global: true, path: "~/components/Prose" }, "~/components"]
  },
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": false
      }
    }
  },
  css: ["~/assets/styles.scss"],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/variables.scss\";"
        }
      }
    }
  },
  modules: ["@nuxt/content"],
  dir: {
    public: ".public"
  },
  experimental: {
    payloadExtraction: false
  },
  generate: {
    routes: ["/not-found"]
  },
  nitro: {
    prerender: {
      ignore: [
        joinURL(
          process.env.NUXT_PUBLIC_BASE_URL ?? "/",
          "/demo/error/non-existent-content"
        )
      ]
    }
  },
  runtimeConfig: {
    public: {
      mdc: {
        headings: {
          anchorLinks: {
            h1: false,
            h2: false,
            h3: false,
            h4: false,
            h5: false,
            h6: true
          }
        }
      },
      baseUrl: ""
    }
  }
});
