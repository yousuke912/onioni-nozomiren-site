# 鬼々よろしく魁望蓮 公式サイト

2027年のうらじゃ復活に向けた、鬼々よろしく魁望蓮（おにおによろしく のぞみれん）の公式サイトです。

## このサイトで伝えること

- 7年の時を越えて復活する理由
- 礼儀・自信・岡山への誇りを育てるチームであること
- 小学1年生〜中学3年生、100人の舞台を目指すこと
- 踊り子募集や応援方法の最新情報は公式LINE・SNSで発信すること
- 2012年〜2019年のうらじゃ受賞歴

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 品質確認

```bash
npm run lint
npm run build
```

`npm run build` が完了すると、Cloudflare Workersへ配置できる静的ファイルが `out/` に生成されます。

公開ビルドでは `.env.example` を参考に、`NEXT_PUBLIC_SITE_URL` を実際の独自ドメインへ設定してください。SNSで共有したときの画像URLに使われます。

## Cloudflare Workers

このサイトはNext.jsの静的出力をCloudflare Workers Static Assetsで配信する構成です。

```bash
npm run preview:workers
```

公開コマンドは用意していますが、現時点では実行しないでください。

```bash
npm run deploy
```

公開前に [PUBLICATION_CHECKLIST.md](./PUBLICATION_CHECKLIST.md) を必ず確認してください。

## 主な編集場所

- 文章・セクション: `app/page.tsx`
- 色・余白・スマホ表示: `app/globals.css`
- ヘッダー: `components/SiteHeader.tsx`
- 写真: `public/images/`
- 検索・SNS表示用の説明: `app/layout.tsx`

## 公式導線

- YouTube
- Instagram
- TikTok
- Facebookグループ
- 公式LINE

サイト内に個人情報を入力するフォームはありません。すべて公式アカウントへの外部リンクです。
