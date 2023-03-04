import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { run } from "./.prebuild/index.js";
import * as customTasks from "./tasks/index.js";

run(
  join(dirname(fileURLToPath(import.meta.url)), "config.yml"),
  customTasks
);