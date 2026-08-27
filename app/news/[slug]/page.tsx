import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticlePage } from "@/components/PostViews";
import { getPost, getPosts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts("news").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("news", slug);
  return {
    title: `${post?.title ?? "お知らせ"}｜鬼々よろしく魁望蓮`,
    alternates: { canonical: `/news/${slug}/` },
  };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("news", slug);
  if (!post) notFound();
  return <PostArticlePage category="news" post={post} />;
}
