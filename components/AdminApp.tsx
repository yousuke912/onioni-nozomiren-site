"use client";

import { marked } from "marked";
import { useCallback, useEffect, useRef, useState } from "react";

const OWNER = "yousuke912";
const REPO = "onioni-nozomiren-site";
const TOKEN_KEY = "onioni-admin-token";

type Category = "news" | "blog";

type RemotePost = {
  category: Category;
  slug: string;
  sha: string;
  title: string;
  date: string;
  draft: boolean;
};

const CATEGORY_LABEL: Record<Category, string> = { news: "お知らせ", blog: "ブログ" };

function toBase64(text: string) {
  return btoa(String.fromCharCode(...new TextEncoder().encode(text)));
}

async function gh(token: string, path: string, init?: RequestInit) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      ...(init?.headers ?? {}),
    },
  });
  return res;
}

function todaySlug() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
}

function todayDate() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

async function shrinkImage(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const maxWidth = 1600;
  const scale = Math.min(1, maxWidth / bitmap.width);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.85));
}

async function blobToBase64(blob: Blob): Promise<string> {
  const buffer = new Uint8Array(await blob.arrayBuffer());
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < buffer.length; i += chunk) {
    binary += String.fromCharCode(...buffer.subarray(i, i + chunk));
  }
  return btoa(binary);
}

export function AdminApp() {
  const [token, setToken] = useState<string | null>(null);
  const [tokenInput, setTokenInput] = useState("");
  const [tokenChecked, setTokenChecked] = useState(false);

  const [view, setView] = useState<"editor" | "list">("editor");
  const [posts, setPosts] = useState<RemotePost[]>([]);
  const [listLoading, setListLoading] = useState(false);

  const [category, setCategory] = useState<Category>("news");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(todayDate());
  const [slug, setSlug] = useState(todaySlug());
  const [body, setBody] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [draft, setDraft] = useState(false);
  const [editingSha, setEditingSha] = useState<string | null>(null);
  const [editingKey, setEditingKey] = useState<string | null>(null);

  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const eyecatchInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(TOKEN_KEY);
      if (saved) setToken(saved);
    } catch {
      /* noop */
    }
    setTokenChecked(true);
  }, []);

  const say = (kind: "ok" | "err", text: string) => setNotice({ kind, text });

  const saveToken = async () => {
    const value = tokenInput.trim();
    if (!value) return;
    setBusy(true);
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}`, {
      headers: { Authorization: `Bearer ${value}` },
    }).catch(() => null);
    setBusy(false);
    if (!res || !res.ok) {
      say("err", "トークンの確認に失敗しました。作り方の手順どおりか確認して、もう一度貼り付けてください。");
      return;
    }
    try {
      localStorage.setItem(TOKEN_KEY, value);
    } catch {
      /* noop */
    }
    setToken(value);
    setNotice(null);
  };

  const resetForm = () => {
    setCategory("news");
    setTitle("");
    setDate(todayDate());
    setSlug(todaySlug());
    setBody("");
    setImagePath("");
    setDraft(false);
    setEditingSha(null);
    setEditingKey(null);
    setNotice(null);
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    if (!token) return null;
    const blob = await shrinkImage(file).catch(() => file);
    const base64 = await blobToBase64(blob);
    const name = `${Date.now()}.jpg`;
    const path = `public/images/posts/${name}`;
    const res = await gh(token, `contents/${path}`, {
      method: "PUT",
      body: JSON.stringify({ message: `写真を追加: ${name}`, content: base64 }),
    });
    if (!res.ok) {
      say("err", "写真のアップロードに失敗しました。通信環境を確認してもう一度お試しください。");
      return null;
    }
    return `/images/posts/${name}`;
  };

  const onEyecatchPicked = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    const url = await uploadImage(file);
    setBusy(false);
    if (url) {
      setImagePath(url);
      say("ok", "アイキャッチ画像をアップロードしました。");
    }
  };

  const onPhotoPicked = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    const url = await uploadImage(file);
    setBusy(false);
    if (!url) return;
    const textarea = bodyRef.current;
    const snippet = `\n\n![写真](${url})\n\n`;
    if (textarea) {
      const pos = textarea.selectionStart ?? body.length;
      setBody(body.slice(0, pos) + snippet + body.slice(pos));
    } else {
      setBody(body + snippet);
    }
    say("ok", "本文に写真を挿入しました。");
  };

  const savePost = async () => {
    if (!token) return;
    if (!title.trim()) {
      say("err", "タイトルを入力してください。");
      return;
    }
    if (!/^[a-z0-9-]+$/.test(slug)) {
      say("err", "記事ID（URL）は半角英数字とハイフンだけで入力してください。");
      return;
    }
    setBusy(true);
    const frontmatter = [
      "---",
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: ${date}`,
      ...(imagePath ? [`image: ${imagePath}`] : []),
      ...(draft ? ["draft: true"] : []),
      "---",
      "",
      body.trim(),
      "",
    ].join("\n");
    const path = `content/${category}/${slug}.md`;
    const payload: Record<string, string> = {
      message: `${editingSha ? "記事更新" : "記事追加"}: ${title}`,
      content: toBase64(frontmatter),
    };
    if (editingSha && editingKey === `${category}/${slug}`) payload.sha = editingSha;
    const res = await gh(token, `contents/${path}`, { method: "PUT", body: JSON.stringify(payload) });
    setBusy(false);
    if (!res.ok) {
      say("err", `保存に失敗しました（${res.status}）。同じ記事IDがすでに無いか確認してください。`);
      return;
    }
    const data = await res.json();
    setEditingSha(data.content?.sha ?? null);
    setEditingKey(`${category}/${slug}`);
    say("ok", draft ? "下書きとして保存しました。（サイトには表示されません）" : "保存しました！2〜3分ほどでサイトに反映されます。");
  };

  const loadList = useCallback(async () => {
    if (!token) return;
    setListLoading(true);
    const results: RemotePost[] = [];
    for (const cat of ["news", "blog"] as Category[]) {
      const res = await gh(token, `contents/content/${cat}`);
      if (!res.ok) continue;
      const items = (await res.json()) as { name: string; sha: string; download_url: string }[];
      for (const item of items) {
        if (!item.name.endsWith(".md")) continue;
        let isDraft = false;
        try {
          const raw = await fetch(item.download_url).then((r) => r.text());
          isDraft = /^draft:\s*true\s*$/m.test(raw.split("---")[1] ?? "");
        } catch {
          /* noop */
        }
        results.push({
          category: cat,
          slug: item.name.replace(/\.md$/, ""),
          sha: item.sha,
          title: item.name.replace(/\.md$/, ""),
          date: item.name.slice(0, 10),
          draft: isDraft,
        });
      }
    }
    results.sort((a, b) => (a.slug < b.slug ? 1 : -1));
    setPosts(results);
    setListLoading(false);
  }, [token]);

  useEffect(() => {
    if (view === "list") void loadList();
  }, [view, loadList]);

  const openPost = async (post: RemotePost) => {
    if (!token) return;
    setBusy(true);
    const res = await gh(token, `contents/content/${post.category}/${post.slug}.md`, {
      headers: { Accept: "application/vnd.github.raw+json" },
    });
    setBusy(false);
    if (!res.ok) {
      say("err", "記事の読み込みに失敗しました。");
      return;
    }
    const raw = await res.text();
    const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    const front = match?.[1] ?? "";
    const rest = raw.slice(match?.[0].length ?? 0).trim();
    const pick = (key: string) => front.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1] ?? "";
    setCategory(post.category);
    setTitle(pick("title").replace(/\\"/g, '"'));
    setDate(pick("date").slice(0, 10) || todayDate());
    setImagePath(pick("image"));
    setDraft(pick("draft") === "true");
    setSlug(post.slug);
    setBody(rest);
    setEditingSha(post.sha);
    setEditingKey(`${post.category}/${post.slug}`);
    setView("editor");
    setNotice(null);
  };

  const deletePost = async (post: RemotePost) => {
    if (!token) return;
    if (!window.confirm(`「${post.slug}」を削除します。よろしいですか？`)) return;
    setBusy(true);
    const res = await gh(token, `contents/content/${post.category}/${post.slug}.md`, {
      method: "DELETE",
      body: JSON.stringify({ message: `記事削除: ${post.slug}`, sha: post.sha }),
    });
    setBusy(false);
    if (!res.ok) {
      say("err", "削除に失敗しました。");
      return;
    }
    say("ok", "削除しました。2〜3分でサイトから消えます。");
    void loadList();
  };

  if (!tokenChecked) return null;

  if (!token) {
    return (
      <main className="admin">
        <div className="admin__shell">
          <h1>記事の管理</h1>
          <p className="admin__lead">
            はじめて使うときだけ、GitHubの「アクセストークン（合鍵）」の設定が必要です。この合鍵はこのブラウザにだけ保存されます。
          </p>
          <ol className="admin__steps">
            <li>
              <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer">
                GitHubのトークン作成ページを開く
              </a>
              （GitHubにログインしていない場合はログイン）
            </li>
            <li>Token name に「onioni-site」など好きな名前を入力</li>
            <li>Expiration（有効期限）は「1 year」などを選択</li>
            <li>Repository access で「Only select repositories」を選び、「{REPO}」を選択</li>
            <li>Permissions → Repository permissions → 「Contents」を「Read and write」に変更</li>
            <li>一番下の「Generate token」を押し、表示された文字列をコピー</li>
            <li>下の欄に貼り付けて「保存」</li>
          </ol>
          <div className="admin__token-row">
            <input
              type="password"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              placeholder="github_pat_ で始まる文字列を貼り付け"
            />
            <button type="button" onClick={saveToken} disabled={busy}>
              {busy ? "確認中…" : "保存"}
            </button>
          </div>
          {notice ? <p className={`admin__notice admin__notice--${notice.kind}`}>{notice.text}</p> : null}
        </div>
      </main>
    );
  }

  return (
    <main className="admin">
      <div className="admin__shell">
        <div className="admin__head">
          <h1>記事の管理</h1>
          <div className="admin__tabs">
            <button type="button" className={view === "editor" ? "is-active" : ""} onClick={() => setView("editor")}>
              記事を書く
            </button>
            <button type="button" className={view === "list" ? "is-active" : ""} onClick={() => setView("list")}>
              記事一覧・編集
            </button>
          </div>
        </div>

        {notice ? <p className={`admin__notice admin__notice--${notice.kind}`}>{notice.text}</p> : null}

        {view === "list" ? (
          <div className="admin__list">
            {listLoading ? <p>読み込み中…</p> : null}
            {!listLoading && posts.length === 0 ? <p>記事がまだありません。</p> : null}
            {posts.map((post) => (
              <div className="admin__list-row" key={`${post.category}/${post.slug}`}>
                <span className="admin__badge">{CATEGORY_LABEL[post.category]}</span>
                {post.draft ? <span className="admin__badge admin__badge--draft">下書き</span> : null}
                <button type="button" className="admin__list-title" onClick={() => openPost(post)}>
                  {post.slug}
                </button>
                <button type="button" className="admin__delete" onClick={() => deletePost(post)}>
                  削除
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="admin__editor">
            {editingSha ? (
              <p className="admin__editing-note">
                「{slug}」を編集中です。
                <button type="button" onClick={resetForm}>新規作成に切り替える</button>
              </p>
            ) : null}

            <label className="admin__field">
              <span>種別</span>
              <div className="admin__radio">
                {(["news", "blog"] as Category[]).map((cat) => (
                  <label key={cat}>
                    <input
                      type="radio"
                      name="category"
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                      disabled={Boolean(editingSha)}
                    />
                    {CATEGORY_LABEL[cat]}
                  </label>
                ))}
              </div>
            </label>

            <label className="admin__field">
              <span>タイトル</span>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="例：練習会を開催します" />
            </label>

            <div className="admin__row2">
              <label className="admin__field">
                <span>日付</span>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </label>
              <label className="admin__field">
                <span>記事ID（URLになります・半角英数字）</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  disabled={Boolean(editingSha)}
                />
              </label>
            </div>

            <label className="admin__draft">
              <input type="checkbox" checked={draft} onChange={(e) => setDraft(e.target.checked)} />
              <span>下書きにする（サイトには表示されません）</span>
            </label>

            <div className="admin__field">
              <span>アイキャッチ画像（一覧や記事の上に表示）</span>
              <div className="admin__eyecatch">
                {imagePath ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imagePath} alt="アイキャッチ" />
                ) : (
                  <p>未設定</p>
                )}
                <div className="admin__eyecatch-buttons">
                  <button type="button" onClick={() => eyecatchInputRef.current?.click()} disabled={busy}>
                    画像を選ぶ
                  </button>
                  {imagePath ? (
                    <button type="button" onClick={() => setImagePath("")}>外す</button>
                  ) : null}
                </div>
              </div>
              <input
                ref={eyecatchInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  void onEyecatchPicked(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
            </div>

            <div className="admin__field">
              <span>本文（改行はそのまま反映されます）</span>
              <div className="admin__toolbar">
                <button type="button" onClick={() => photoInputRef.current?.click()} disabled={busy}>
                  📷 写真を挿入
                </button>
                <button type="button" onClick={() => setShowPreview((v) => !v)}>
                  {showPreview ? "編集にもどる" : "プレビューを見る"}
                </button>
              </div>
              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  void onPhotoPicked(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
              {showPreview ? (
                <div
                  className="post-article__body admin__preview"
                  dangerouslySetInnerHTML={{ __html: marked.parse(body, { async: false, breaks: true }) as string }}
                />
              ) : (
                <textarea
                  ref={bodyRef}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={14}
                  placeholder="ここに本文を書きます。&#10;&#10;改行はそのまま表示されます。写真は「📷 写真を挿入」ボタンで本文中に入れられます。"
                />
              )}
            </div>

            <div className="admin__actions">
              <button type="button" className="admin__save" onClick={savePost} disabled={busy}>
                {busy ? "処理中…" : draft ? (editingSha ? "下書きを更新する" : "下書きとして保存") : editingSha ? "更新して公開する" : "保存して公開する"}
              </button>
              <p>{draft ? "下書きはサイトには表示されません。公開するときは下書きのチェックを外して保存してください。" : "保存すると2〜3分でサイトに反映されます。"}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
