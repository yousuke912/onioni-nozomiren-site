import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜鬼々よろしく魁望蓮",
  description:
    "鬼々よろしく魁望蓮の公式サイトにおける、アクセス解析ツールの利用と個人情報の取り扱いについて説明します。",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="guide">
      <section className="guide__hero">
        <div className="page-shell">
          <nav className="breadcrumb" aria-label="パンくずリスト">
            <Link href="/">ホーム</Link>
            <span aria-hidden="true">/</span>
            <span>プライバシーポリシー</span>
          </nav>
          <p className="guide__en" data-reveal>PRIVACY POLICY</p>
          <h1 data-reveal>プライバシーポリシー</h1>
        </div>
      </section>

      <section className="guide__body section-pad">
        <div className="page-shell">
          <article className="guide__article" style={{ maxWidth: 760 }}>
            <h2>アクセス解析について</h2>
            <p>
              当サイトでは、サイトの利用状況を把握して改善するために、Googleが提供するアクセス解析ツール
              「Googleアナリティクス」を利用しています。
            </p>
            <p>
              Googleアナリティクスは、閲覧されたページ、滞在時間、おおよその地域といった情報を、
              Cookie（クッキー）を用いて収集します。
              <strong>これらの情報は統計的に処理されるもので、個人を特定できる情報は含まれません</strong>。
              また、当サイトではIPアドレスを匿名化する設定を有効にしています。
            </p>
            <p>
              収集の停止を希望される場合は、お使いのブラウザでCookieを無効にするか、Googleが提供する
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=ja"
                target="_blank"
                rel="noreferrer"
              >
                オプトアウトアドオン
              </a>
              をご利用ください。
            </p>
            <p>
              Googleアナリティクスの利用規約およびプライバシーポリシーについては、
              <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noreferrer">
                Googleのプライバシーポリシー
              </a>
              をご確認ください。
            </p>

            <h2>お問い合わせでいただく情報について</h2>
            <p>
              公式LINEを通じていただいたお問い合わせの内容は、お返事とご案内のためだけに使用します。
              ご本人の同意なく第三者へ提供することはありません。
            </p>

            <h2>写真の掲載について</h2>
            <p>
              当サイトに掲載している演舞や活動の写真は、掲載についての確認を得たうえで使用しています。
              掲載内容についてお気づきの点がありましたら、公式LINEよりご連絡ください。
              確認のうえ速やかに対応します。
            </p>

            <h2>本ポリシーの変更</h2>
            <p>
              内容を変更する場合は、このページで告知します。
            </p>

            <p className="guide__note" style={{ marginTop: 32 }}>
              制定日：2026年8月30日
              <br />
              鬼々よろしく魁望蓮
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
