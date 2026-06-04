import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://giovannilion.link",
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
