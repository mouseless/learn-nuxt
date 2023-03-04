import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { run } from "./.prebuild/index.js";

const configPath = join(dirname(fileURLToPath(import.meta.url)), "config.yml");

run(configPath, {
  customTasks: {
    sampleTask: async () => console.log("STARTING PREBUILD")
  }
});