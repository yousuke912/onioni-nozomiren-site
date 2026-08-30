import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, LineIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "うらじゃとは？岡山の夏祭りに子どもが参加する方法｜鬼々よろしく魁望蓮",
  description:
    "うらじゃは岡山市で毎年夏に開かれる祭りです。子どもが踊り子として参加するには「連（れん）」に入ります。対象年齢、練習、費用、保護者の関わり方など、はじめての方が気になることをまとめました。",
  alternates: { canonical: "/uraja/" },
  openGraph: {
    title: "うらじゃとは？岡山の夏祭りに子どもが参加する方法",
    description:
      "うらじゃの基礎知識と、小学生・中学生が踊り子として参加する方法。よくある質問つき。",
    type: "article",
  },
};

const lineUrl = "https://line.me/R/ti/p/@301sbdtt?oat_content=url&ts=08260652";

const faqs = [
  {
    q: "うらじゃとは、どんな祭りですか？",
    a: "岡山市で毎年夏に開かれる市民参加型の祭りです。岡山に伝わる温羅（うら）の伝説をモチーフにしていて、顔に「うらじゃメイク」をした踊り子が、市内の演舞場やパレードで踊ります。参加者は「連（れん）」と呼ばれるチーム単位で出演します。",
  },
  {
    q: "子どもだけでも参加できますか？",
    a: "できます。子どもを中心にした連があり、鬼々よろしく魁望蓮もそのひとつです。小学1年生から中学3年生までの子どもが踊り子として参加し、大人はそれを支える側にまわります。",
  },
  {
    q: "何歳から参加できますか？",
    a: "鬼々よろしく魁望蓮では、小学1年生から中学3年生までが踊り子の対象です。",
  },
  {
    q: "踊りの経験がなくても大丈夫ですか？",
    a: "大丈夫です。うらじゃの踊りは連のみんなで一から練習して覚えます。経験の有無より、最後までやり切る気持ちを大切にしています。",
  },
  {
    q: "保護者はどこまで関わりますか？",
    a: "鬼々よろしく魁望蓮では、大人は「支える側」として関わります。練習の見守りや当日の運営などをみんなで分担します。「子どもに求めることを、まず大人がやる」という考え方を大切にしています。",
  },
  {
    q: "いつから参加できますか？",
    a: "鬼々よろしく魁望蓮は2027年のうらじゃに向けて活動しています。踊り子の募集は2027年4月に開始する予定です。募集の詳細が決まりしだい、公式LINEとこのサイトのお知らせでご案内します。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "衣装代などの費用は、募集開始にあわせてご案内します。気になることは公式LINEからお気軽にお問い合わせください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://onioni.jp/" },
    { "@type": "ListItem", position: 2, name: "うらじゃとは", item: "https://onioni.jp/uraja/" },
  ],
};

export default function UrajaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }}
      />

      <main id="main-content" className="guide">
        <section className="guide__hero">
          <div className="page-shell">
            <nav className="breadcrumb" aria-label="パンくずリスト">
              <Link href="/">ホーム</Link>
              <span aria-hidden="true">/</span>
              <span>うらじゃとは</span>
            </nav>
            <p className="guide__en" data-reveal>URAJA GUIDE</p>
            <h1 data-reveal>
              うらじゃとは？
              <br />
              岡山の夏祭りに子どもが参加する方法
            </h1>
            <p className="guide__lead" data-reveal>
              「子どもに何か打ち込めるものを見つけてほしい」「岡山の祭りに参加させたい」。
              <br />
              そう考えている保護者の方に向けて、うらじゃの基礎知識と参加のしかたをまとめました。
            </p>
          </div>
        </section>

        <section className="guide__body section-pad">
          <div className="page-shell guide__inner">
            <article className="guide__article">
              <h2 id="about-uraja">うらじゃとは</h2>
              <p>
                うらじゃは、<strong>岡山市で毎年夏に開かれる市民参加型の祭り</strong>です。
                岡山に伝わる温羅（うら）の伝説をモチーフにしていて、顔に「うらじゃメイク」をほどこした踊り子が、
                市内の演舞場やパレードで踊ります。
              </p>
              <p>
                参加するのは「<strong>連（れん）</strong>」と呼ばれるチームです。
                連は数十人から百人以上の規模までさまざまで、子ども中心の連、社会人の連、地域や職場の連などがあります。
                それぞれの連が独自の衣装と振り付けを用意し、夏に向けて練習を重ねます。
              </p>
              <p className="guide__note">
                開催日程や会場は年によって変わります。最新の情報は
                <a href="https://www.uraja.jp/" target="_blank" rel="noreferrer">
                  うらじゃ公式サイト
                  <ArrowUpRightIcon />
                </a>
                でご確認ください。
              </p>

              <h2 id="join">子どもが参加するには</h2>
              <p>
                うらじゃに個人で申し込む仕組みはありません。
                <strong>踊り子として出演するには、どこかの連に入る</strong>のが基本の流れです。
              </p>
              <ol className="guide__steps">
                <li>
                  <strong>連を探す</strong>
                  子ども中心の連、親子で入れる連など、連ごとに雰囲気や方針が違います。対象年齢と練習場所を確認しましょう。
                </li>
                <li>
                  <strong>募集の時期に申し込む</strong>
                  多くの連は春に募集をかけます。祭りは夏なので、練習期間を考えると春の申し込みが目安です。
                </li>
                <li>
                  <strong>練習に参加する</strong>
                  振り付けを覚え、隊列を揃えていきます。踊りの経験がなくても、連のみんなで一から練習します。
                </li>
                <li>
                  <strong>本番の舞台へ</strong>
                  うらじゃメイクをして衣装を着て、演舞場やパレードで踊ります。
                </li>
              </ol>

              <h2 id="our-team">鬼々よろしく魁望蓮について</h2>
              <p>
                鬼々よろしく魁望蓮（おにおによろしく のぞみれん）は、
                <strong>2011年に岡山で創設された子ども踊り連</strong>です。
                2016年にはうらじゃ最優秀賞「誉」、2017年には優秀賞「匠」をいただきました。
              </p>
              <p>
                2020年、コロナ禍でうらじゃが中止となり活動を休止しましたが、
                <strong>2027年のうらじゃで復活します</strong>。かつての踊り子が大人になって運営に加わり、
                100人の子どもが踊る舞台を目指しています。
              </p>
              <dl className="guide__spec">
                <div>
                  <dt>対象</dt>
                  <dd>小学1年生〜中学3年生</dd>
                </div>
                <div>
                  <dt>活動地域</dt>
                  <dd>岡山県岡山市</dd>
                </div>
                <div>
                  <dt>目標人数</dt>
                  <dd>踊り子100人</dd>
                </div>
                <div>
                  <dt>募集開始</dt>
                  <dd>2027年4月 予定</dd>
                </div>
              </dl>
              <p>
                私たちが大切にしているのは、踊りのうまさよりも
                <strong>「礼儀」「仲間」「やり切る力」</strong>です。
                詳しくは<Link href="/philosophy/">運営理念</Link>をご覧ください。
              </p>

              <h2 id="faq">よくある質問</h2>
              <div className="faq">
                {faqs.map((faq) => (
                  <details className="faq__item" key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </article>

            <aside className="guide__cta" data-reveal>
              <p className="guide__cta-label">CONTACT</p>
              <h3>まずは最新情報を受け取る</h3>
              <p>
                踊り子の募集や見学会のお知らせは、公式LINEでいちばん早くお届けします。
                質問だけでも気軽にどうぞ。
              </p>
              <a className="button button--primary" href={lineUrl} target="_blank" rel="noreferrer">
                <LineIcon />
                公式LINEを友だち追加
                <ArrowUpRightIcon />
              </a>
              <Link className="guide__cta-link" href="/">
                鬼々よろしく魁望蓮について詳しく
                <ArrowRightIcon />
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
