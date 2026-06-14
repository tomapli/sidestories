import type { MetadataRoute } from "next";

import { excludedRoutes, siteUrl } from "~/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: [...excludedRoutes],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
