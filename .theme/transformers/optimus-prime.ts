// @ts-ignore
import { defineTransformer } from "@nuxt/content/transformers";

export default defineTransformer({
  name: "learn-transformer",
  extensions: [".md"],
  transform (content: any) {
    if(content.title === "Transformers") {
      // @ts-ignore
      content.body.children.filter(f => f.tag === "p")[0].tag = "strong";
    }
    return content;
  }
});
