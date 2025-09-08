import type { MetadataRoute } from "next";

const BASE_URL = "https://pl8chat.com";

const ROUTES: Array<{
  path: string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/business", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  // ── Add more pages here  ──
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: today,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
