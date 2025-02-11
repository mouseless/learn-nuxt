import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page", // type can be "data" or "page"
      source: "**/*.md"
    })
  }
});
