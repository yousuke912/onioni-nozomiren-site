import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://onioni.jp";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/uraja/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/philosophy/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/news/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const posts: MetadataRoute.Sitemap = (["news", "blog"] as const).flatMap((category) =>
    getPosts(category).map((post) => ({
      url: `${base}/${category}/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );

  return [...staticPages, ...posts];
}
