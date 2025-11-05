import { spawn } from "child_process";
import { defineNuxtModule } from "@nuxt/kit";
import { resolve } from "path";

export default defineNuxtModule({
  setup(_: any, nuxt: { hook: (arg0: string, arg1: (config: any, { isClient }: { isClient: any; }) => void) => void; options: { rootDir: any; }; }) {
    nuxt.hook("vite:extendConfig", (config: { plugins: { name: string; configureServer(server: any): void; }[]; }, { isClient }: any) => {
      if(isClient) { return; }

      config.plugins?.push({
        name: "prebuild",
        configureServer(server: { watcher: any; }) {
          const { watcher } = server;
          const rootPath = resolve(nuxt.options.rootDir, "../");

          watcher.add(rootPath);
          watcher.on("change", (file: string) => {
            if(file.includes(".theme")) { return; }
            if(!file.endsWith(".md")) { return; }

            const child = spawn("node", ["-r", "dotenv/config", "prebuild", "dotenv_config_path=.env.local"]);

            child.stdout.on("data", (data: any) => {
              console.log(`${data}`);
            });

            child.stderr.on("data", (data: any) => {
              console.error(`${data}`);
            });
          });
        }
      });
    });
  }
});