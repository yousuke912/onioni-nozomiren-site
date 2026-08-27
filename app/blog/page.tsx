import type { Metadata } from "next";
import { PostListPage } from "@/components/PostViews";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "ブログ｜鬼々よろしく魁望蓮",
  description: "鬼々よろしく魁望蓮のブログ。2027年うらじゃ復活に向けた活動の様子を綴ります。",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return <PostListPage category="blog" posts={getPosts("blog")} />;
}
