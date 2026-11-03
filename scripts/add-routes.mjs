// Appends deployment-only custom domains to the generated Worker config, so
// community domains stay attached on every deploy without being named in the repo.
import { readFileSync, writeFileSync } from "node:fs";

const configPath = process.argv[2] || "dist/server/wrangler.json";
const domains = (process.env.COMMUNITY_DOMAINS || "")
  .split(",")
  .map((domain) => domain.trim().toLowerCase())
  .filter(Boolean);

if (!domains.length) {
  console.log("add-routes: COMMUNITY_DOMAINS not set, no extra routes added.");
  process.exit(0);
}

const config = JSON.parse(readFileSync(configPath, "utf8"));
const routes = Array.isArray(config.routes) ? config.routes : [];
const existing = new Set(routes.map((route) => (typeof route === "string" ? route : route.pattern)));
for (const domain of domains) {
  if (!existing.has(domain)) routes.push({ pattern: domain, custom_domain: true });
}
config.routes = routes;
writeFileSync(configPath, JSON.stringify(config));
console.log(`add-routes: routes now ${routes.map((route) => route.pattern ?? route).join(", ")}`);
