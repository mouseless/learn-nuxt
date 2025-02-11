import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page", // type can be "data" or "page"
      source: "**/*.md"
    }),
    notFound: defineCollection({
      type: "page",
      source: "**/not-found.md"
    }),
    headers: defineCollection({
      type: "data",
      source: {
        include: "*.md"
      },
      schema: z.object({
        path: z.string(),
        title: z.string(),
        position: z.number()
      })
    })
  }
});
