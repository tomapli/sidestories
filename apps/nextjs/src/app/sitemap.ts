import type { MetadataRoute } from "next";

import { indexedRoutes, siteUrl } from "~/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
