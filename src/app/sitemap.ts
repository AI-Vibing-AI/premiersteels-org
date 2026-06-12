import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Filter out noindex / admin routes (priority 0)
  return routes
    .filter((r) => r.priority > 0)
    .map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    }));
}
