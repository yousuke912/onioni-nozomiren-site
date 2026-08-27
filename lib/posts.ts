import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostCategory = "news" | "blog";

export type Post = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  draft: boolean;
  excerpt: string;
  html: string;
};

function contentDir(category: PostCategory) {
  return path.join(process.cwd(), "content", category);
}

export function getPosts(category: PostCategory, includeDrafts = false): Post[] {
  const dir = contentDir(category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const plain = content
        .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/[#>*`_~-]/g, "")
        .replace(/\s+/g, " ")
        .trim();
      const rawDate = data.date as unknown;
      const date =
        rawDate instanceof Date
          ? rawDate.toISOString().slice(0, 10)
          : String(rawDate ?? "").slice(0, 10);
      return {
        slug,
        title: String(data.title ?? slug),
        date,
        image: data.image ? String(data.image) : undefined,
        draft: data.draft === true || String(data.draft) === "true",
        excerpt: plain.slice(0, 90),
        html: marked.parse(content, { async: false, breaks: true }) as string,
      };
    })
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(category: PostCategory, slug: string): Post | undefined {
  return getPosts(category).find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return date.replaceAll("-", ".");
}
