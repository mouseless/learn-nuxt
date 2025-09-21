import { resolve } from "path";
import { defineNuxtModule } from "@nuxt/kit";

// You can check this 'https://content.nuxtjs.org/api/advanced' to
// understand how transformers are registered.
export default defineNuxtModule({
  meta: {
    name: "transformer-module",
    version: "1.0.0",
    configKey: "transformerModule"
  },
  onInstall() {
    // The module works when first installed.
    console.log("Transformer Module Installed");
  },
  onUpgrade() {
    // The module runs every time it is updated.
    console.log("If you see this log, it means you have upgraded the version.");
  },
  setup(_options, nuxt) {
    nuxt.options.nitro.externals ||= { };
    nuxt.options.nitro.externals.inline ||= [];
    nuxt.options.nitro.externals.inline.push(resolve("./transformers"));

    nuxt.hook("content:context", contentContext => {
      contentContext.transformers.push(resolve("./transformers/optimus-prime.ts"));
    });
  }
});
