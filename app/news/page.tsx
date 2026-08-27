import type { Metadata } from "next";
import { PostListPage } from "@/components/PostViews";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "お知らせ｜鬼々よろしく魁望蓮",
  description: "鬼々よろしく魁望蓮のお知らせ一覧。募集情報やイベント情報を掲載します。",
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  return <PostListPage category="news" posts={getPosts("news")} />;
}
