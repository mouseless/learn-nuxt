// @ts-ignore
import { defineTransformer } from "@nuxt/content/transformers";

export default defineTransformer({
  name: "learn-transformer",
  extensions: [".md"],
  // @ts-ignore
  parse: async (_id, content, options = {}) => {
    // @ts-ignore
    const config = { ...options } as MarkdownOptions;

    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    // @ts-ignore
    const parsed = await parse(content, config);
    console.log("parsed: ", parsed);
    // @ts-ignore
    return <MarkdownParsedContent> {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
// @ts-ignore

async function importPlugins (plugins: Record<string, false | MarkdownPlugin> = {}) {
  // @ts-ignore
  const resolvedPlugins: Record<string, false | MarkdownPlugin & { instance: any }> = {};
  for(const [name, plugin] of Object.entries(plugins)) {
    if(plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(/* @vite-ignore */ name).then(m => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
