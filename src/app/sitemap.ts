import type { MetadataRoute } from "next";

const SITE_URL = "https://gtoillini.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/events",
    "/competitive-team",
    "/leaderboard",
    "/leaderboard/past",
    "/merch",
    "/tools",
    "/sponsor",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
