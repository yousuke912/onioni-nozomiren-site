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
  const description = post ? `${post.excerpt}…` : "鬼々よろしく魁望蓮のお知らせです。";
  return {
    title: `${post?.title ?? "お知らせ"}｜鬼々よろしく魁望蓮`,
    description,
    alternates: { canonical: `/news/${slug}/` },
    openGraph: {
      title: post?.title ?? "お知らせ",
      description,
      type: "article",
      publishedTime: post?.date,
      ...(post?.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("news", slug);
  if (!post) notFound();
  return <PostArticlePage category="news" post={post} />;
}
