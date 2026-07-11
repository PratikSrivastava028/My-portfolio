import type { MetadataRoute } from "next";


const siteUrl = "https://www.yourdomain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-02-28"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
