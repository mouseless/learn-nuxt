import { joinURL } from "ufo";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

const Mouseless = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{red.50}",
      950: "{red.950}"
    }
  }
});

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
          href: "https://brand.mouseless.codes/assets/css/default.css"
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
  compatibilityDate: "2024-10-10",
  components: {
    dirs: [{ global: true, path: "~/components/Prose" }, "~/components"]
  },
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": false
      }
    },
    highlight: {
      theme: "slack-dark",
      preload: [
        "diff",
        "ts",
        "js",
        "css",
        "java",
        "markdown",
        "sql",
        "xml",
        "json",
        "csharp",
        "md",
        "bash",
        "dockerfile"
      ]
    }
  },
  css: ["~/assets/styles.scss"],
  devtools: { enabled: true },
  dir: {
    public: ".public"
  },
  experimental: {
    payloadExtraction: false
  },
  features: {
    inlineStyles: false
  },
  generate: {
    routes: ["/not-found"]
  },
  modules: ["@nuxt/content", "@pinia/nuxt", "@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Mouseless
      }
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    autoImport: true
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
      baseUrl: "",
      gitHubBaseURL: "https://api.github.com"
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/variables.scss\";"
        }
      }
    }
  },
  tailwindcss: {
    cssPath: ["~/assets/tailwind.css"]
  }
});
