// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";
import { loadEnv } from "vite";

const isDev = process.argv.includes("dev");
const env = loadEnv(isDev ? "development" : "production", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL?.trim() || "https://vega-app.in",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  // Local development uses Astro's native asset server. The deployment worker
  // serves compiled files and must not intercept Vite's source/image requests.
  adapter: isDev ? node({mode: "standalone"}) : cloudflare({
    imageService: "compile",
  }),
});
