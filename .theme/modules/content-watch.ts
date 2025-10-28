import { defineNuxtModule } from "@nuxt/kit";
import { resolve, basename } from "path";
import { copyFileSync } from "fs";

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook("vite:extendConfig", (config, { isClient }) => {
      if(isClient) { return; }

      config.plugins?.push({
        name: "content-watch",
        configureServer(server) {
          const { watcher } = server;
          const rootPath = resolve(nuxt.options.rootDir, "../");
          const contentPath = resolve(nuxt.options.rootDir, "content");

          watcher.add(rootPath);
          watcher.on("change", file => {
            if(file.endsWith(".md")) {
              const fileName = basename(file);

              copyFileSync(file, resolve(contentPath, fileName));
            }
          });
        }
      });
    });
  }
});