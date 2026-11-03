// Public site origin, set per deployment via PUBLIC_SITE_URL.
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL?.trim() || "https://vega-app.in";

export const REPO = Object.freeze({
  owner: "vega-org",
  name: "vega-app",
  orgUrl: "https://github.com/vega-org",
  url: "https://github.com/vega-org/vega-app",
  releasesUrl: "https://github.com/vega-org/vega-app/releases",
  githubCacheTtlSeconds: 300,
  discordInviteApiUrl:
    "https://discord.com/api/v9/invites/cr42m6maWy?with_counts=true&with_expiration=true&with_permissions=true",
});

export const DESKTOP_REPO = Object.freeze({
  owner: "vega-org",
  name: "vega-desktop",
  orgUrl: "https://github.com/vega-org",
  url: "https://github.com/vega-org/vega-desktop",
  releasesUrl: "https://github.com/vega-org/vega-desktop/releases",
  githubCacheTtlSeconds: 300,
});

export const DISCORD_INVITE_URL = "https://discord.com/invite/cr42m6maWy";

export const APP_LINKS = Object.freeze({
  webApp: "https://web.vega-app.in",
  guide: "/guide",
  officialSite: "https://vega-app.in",
  playStore: "https://play.google.com/store/apps/details?id=vega.app",
  microsoftStore:
    "https://apps.microsoft.com/detail/9n3fdt30wdlb?referrer=appbadge&mode=full",
  providerAuthoringGuide: "/guide/create-provider",
  addSource: "/add-source",
  warpPlayStore:
    "https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone",
  warpApkMirror:
    "https://www.apkmirror.com/apk/cloudflare/1-1-1-1-faster-safer-internet/1-1-1-1-warp-safer-internet-6-38-6-release/1-1-1-1-warp-safer-internet-6-38-6-android-apk-download/",
  byeDpiGithub: "https://github.com/dovecoteescapee/ByeDPIAndroid",
  byeDpiReleases:
    "https://github.com/dovecoteescapee/ByeDPIAndroid/releases/latest",
});

export const MAINTAINER = Object.freeze({
  name: "Zenda-X",
  avatarUrl: "https://avatars.githubusercontent.com/u/143804558?v=4",
});

// These values are public and are embedded in generated pages at build time.
export const PROVIDER_SOURCE = Object.freeze({
  username: import.meta.env.PROVIDER_SOURCE_USERNAME?.trim() || "",
  url: import.meta.env.PROVIDER_SOURCE_URL?.trim() || "",
  name: import.meta.env.PROVIDER_SOURCE_NAME?.trim() || "Provider source",
});
