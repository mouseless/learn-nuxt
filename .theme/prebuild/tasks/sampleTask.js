import log from "../.prebuild/tasks/utils/log.js";
/**
 * Checks whether file with a given path exists, if not, it creates an empty
 * file at the specified path.
 *
 * @async
 * @param {Object} parameters Task parameters
 * @param {String} parameters.path Path to be touched
 *
 * @returns {Promise}
 */
export default async function () {
  return log.info("this is a sample task");
}