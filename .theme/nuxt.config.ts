import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

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
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://brand.mouseless.codes/assets/css/default.css"
        }
      ],
      meta: [
        {
          id: "og:description",
          property: "og:description",
          content: "Welcome to mouseless"
        },
        {
          id: "og:image",
          property: "og:image",
          content: "https://mouseless.github.io/learn-nuxt/favicon.ico"
        },
        {
          id: "og:image:width",
          property: "og:image:width",
          content: "50"
        },
        {
          id: "og:image:height",
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
    build: {
      markdown: {
        remarkPlugins: {
          "remark-emoji": false
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
      }
    },
    renderer: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: true
      }
    },
    experimental: {
      nativeSqlite: true
    }
  },
  css: ["~/assets/styles.scss"],
  devtools: { enabled: false },
  dir: {
    public: ".public"
  },
  experimental: {
    payloadExtraction: false
  },
  features: {
    inlineStyles: false
  },
  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@primevue/nuxt-module",
    "@nuxtjs/i18n"
  ],
  plugins: ["../mermaid.client.js"],
  i18n: {
    restructureDir: "",
    defaultLocale: "en",
    strategy: "no_prefix",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "tr", name: "Türkçe", file: "tr.json" }
    ]
  },
  primevue: {
    options: {
      theme: {
        preset: Mouseless,
        options: {
          cssLayer: {
            order: "tailwind-base, primevue, tailwind-utilities"
          }
        }
      }
    },
    autoImport: true
  },
  nitro: {
    prerender: {
      routes: ["/not-found"]
    },
    hooks: {
      "prerender:generate"(route: { route: string; skip: boolean; }) {
        if(route.route.endsWith("/demo/error/non-existent-content")) {
          route.skip = true;
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: "",
      gitHubBaseURL: "https://api.github.com"
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use \"~/assets/variables.scss\" as *;"
        }
      }
    }
  },
  tailwindcss: {
    cssPath: ["~/assets/tailwind.css", {injectPosition: "first"}]
  }
});