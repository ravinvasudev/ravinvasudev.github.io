import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ravinvasudev.com";

  return [
    "",
    "/projects",
    "/experience",
    "/skills",
    "/about",
    "/blog"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
