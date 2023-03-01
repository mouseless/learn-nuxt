import { existsSync, writeFile } from "fs";
import { join } from "path";
import log from "./utils/log.js";

export default async function({ directory }) {
  log.info("Checking .env.locale");

  if(existsSync(join(directory,".env.local"))){

    log.info("File found successfully\n");
  }
  else{

    writeFile(join(directory,".env.local"),"BASE_URL=/\nCHROMIUM_EXECUTABLE_PATH=",err => {
      if (err){

        return log.info(err);
      }
    });

    return log.info("File created successfully\n");
  }
}
