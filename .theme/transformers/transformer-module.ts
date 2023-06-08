import { resolve } from "path";
import { defineNuxtModule } from "@nuxt/kit";

// You can check this 'https://content.nuxtjs.org/api/advanced' to
// understand how transformers are registered.
export default defineNuxtModule({
  setup (_options, nuxt) {
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || { };
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || [];
    nuxt.options.nitro.externals.inline.push(resolve("./transformers"));

    nuxt.hook("content:context", contentContext => {
      contentContext.transformers.push(resolve("./transformers/optimus-prime.ts"));
    });
  }
});
