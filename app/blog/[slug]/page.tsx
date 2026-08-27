import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticlePage } from "@/components/PostViews";
import { getPost, getPosts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts("blog").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug);
  return {
    title: `${post?.title ?? "ブログ"}｜鬼々よろしく魁望蓮`,
    alternates: { canonical: `/blog/${slug}/` },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) notFound();
  return <PostArticlePage category="blog" post={post} />;
}
