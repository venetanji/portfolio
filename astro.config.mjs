import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://venetanji.com",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  vite: {
    ssr: {
      noExternal: ["simplex-noise"],
    },
  },
});
