import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_ROUTES.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/pricing"
          ? 0.9
          : ["/features", "/how-it-works", "/faq"].includes(path)
            ? 0.85
            : 0.6,
  }));
}
