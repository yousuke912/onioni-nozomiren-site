import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/Icons";
import { formatDate, type Post, type PostCategory } from "@/lib/posts";

const CATEGORY_META: Record<PostCategory, { en: string; ja: string; lead: string }> = {
  news: {
    en: "NEWS",
    ja: "お知らせ",
    lead: "募集情報・イベント・チームからの大切なお知らせを掲載します。",
  },
  blog: {
    en: "BLOG",
    ja: "ブログ",
    lead: "2027年うらじゃ復活に向けた準備の様子や、チームの想いを綴ります。",
  },
};

export function PostListPage({ category, posts }: { category: PostCategory; posts: Post[] }) {
  const meta = CATEGORY_META[category];
  return (
    <main id="main-content" className="philosophy-page">
      <section className="philosophy-page__intro">
        <div className="page-shell">
          <p className="philosophy-page__en" data-reveal>{meta.en}</p>
          <h1 data-reveal>{meta.ja}</h1>
          <p className="philosophy-page__lead" data-reveal>{meta.lead}</p>
        </div>
      </section>

      <section className="posts section-pad">
        <div className="page-shell">
          {posts.length === 0 ? (
            <p className="posts__empty" data-reveal>まだ記事がありません。これからの更新をお楽しみに。</p>
          ) : (
            <div className="posts__list">
              {posts.map((post) => (
                <article key={post.slug} data-reveal>
                  <Link className={`post-card${post.image ? " post-card--thumb" : ""}`} href={`/${category}/${post.slug}/`}>
                    {post.image ? (
                      <span className="post-card__thumb">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.image} alt="" loading="lazy" />
                      </span>
                    ) : null}
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <div>
                      <h2>{post.title}</h2>
                      <p>{post.excerpt}…</p>
                    </div>
                    <ArrowUpRightIcon />
                  </Link>
                </article>
              ))}
            </div>
          )}

          <div className="posts__back" data-reveal>
            <Link className="button button--primary" href="/">
              トップページへ戻る
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function PostArticlePage({ category, post }: { category: PostCategory; post: Post }) {
  const meta = CATEGORY_META[category];
  return (
    <main id="main-content" className="philosophy-page">
      <section className="philosophy-page__intro">
        <div className="page-shell">
          <p className="philosophy-page__en" data-reveal>{meta.en}</p>
          <p className="post-article__date" data-reveal>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <h1 data-reveal>{post.title}</h1>
        </div>
      </section>

      <section className="posts section-pad">
        <div className="page-shell">
          {post.image ? (
            <figure className="post-article__eyecatch" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} />
            </figure>
          ) : null}
          <article
            className="post-article__body"
            data-reveal
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="posts__back" data-reveal>
            <Link className="button button--primary" href={`/${category}/`}>
              {meta.ja}一覧へ戻る
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
