import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://onioni.jp";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 検索エンジンもAIクローラーも歓迎する（管理画面だけ除外）
      { userAgent: "*", allow: "/", disallow: ["/admin/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
