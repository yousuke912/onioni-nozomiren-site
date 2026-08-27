import Image from "next/image";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  FacebookIcon,
  InstagramIcon,
  LineIcon,
  PlayIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/Icons";

const lineUrl = "https://line.me/R/ti/p/@301sbdtt?oat_content=url&ts=08260652";

const values = [
  {
    number: "01",
    title: "礼儀を、舞台の外でも。",
    text: "あいさつ、マナー、思いやり。仲間と一つの演舞をつくる時間を通して、人として大切なことを身につけます。",
    word: "RESPECT",
  },
  {
    number: "02",
    title: "「できた」が、自信になる。",
    text: "本気で練習し、仲間とやり切る経験が「自分にもできる」という自信と、次の一歩を踏み出す挑戦心を育てます。",
    word: "COURAGE",
  },
  {
    number: "03",
    title: "岡山を、もっと誇らしく。",
    text: "うらじゃという岡山の祭りに全力で向き合い、地域の人とつながる。子どもたちの中に、ふるさとへの誇りを育てます。",
    word: "PRIDE",
  },
];

const awards = [
  { year: "2019", items: ["表町タペストリー優秀賞", "ハレマチ子ども演舞場賞（日曜）"] },
  { year: "2018", items: ["ハレマチ子ども演舞場賞（日曜）"] },
  { year: "2017", items: ["優秀賞「匠」"] },
  {
    year: "2016",
    items: ["最優秀賞「誉」", "ハレマチ子ども演舞場賞（日曜）", "表町タペストリー最優秀賞"],
  },
  { year: "2015", items: ["表町タペストリー おかやま信用金庫賞"] },
  { year: "2014", items: ["表町タペストリー最優秀賞"] },
  { year: "2013", items: ["下石井公園演舞場賞"] },
  { year: "2012", items: ["市役所筋北舞場賞"] },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  name: "鬼々よろしく魁望蓮",
  alternateName: "おにおによろしく のぞみれん",
  description: "岡山の子ども踊り連。2027年うらじゃで復活します。",
  areaServed: "岡山県",
  sameAs: [
    "https://www.youtube.com/channel/UCX4HAcRvpVgmcvO1xkhwl5w",
    "https://www.tiktok.com/@onioni_uraja",
    "https://www.instagram.com/onioni_yoroshiku_nozomiren/reels/",
    "https://www.facebook.com/groups/154422981410031",
  ],
};

function SectionTitle({ en, children, light = false }: { en: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-title${light ? " section-title--light" : ""}`} data-reveal>
      <p>{en}</p>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <HeroSlideshow />
          <div className="hero__brush" aria-hidden="true" />

          <div className="hero__content">
            <p className="hero__eyebrow" data-reveal>
              <span>2027</span>
              URAJA / RESTART
            </p>
            <h1 id="hero-title" data-reveal>
              子どもたちの本気が、
              <br />
              <em>岡山の夏</em>を震わせる。
            </h1>
            <p className="hero__lead" data-reveal>
              鬼々よろしく魁望蓮、
              <br />
              7年の時を越えて復活。
            </p>
            <div className="hero__actions" data-reveal>
              <a className="button button--primary" href="#project">
                復活プロジェクトを知る
                <ArrowRightIcon />
              </a>
              <a className="button button--ghost" href={lineUrl} target="_blank" rel="noreferrer">
                <LineIcon />
                公式LINEで最新情報
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>

          <div className="hero__facts" aria-label="プロジェクト概要">
            <div>
              <strong>2027</strong>
              <span>うらじゃ復活</span>
            </div>
            <div>
              <strong>小1〜中3</strong>
              <span>踊り子対象</span>
            </div>
            <div>
              <strong>100</strong>
              <span>人の舞台へ</span>
            </div>
          </div>

          <a className="hero__scroll" href="#about" aria-label="私たちについてへスクロール">
            <span>SCROLL</span>
            <i />
          </a>
        </section>

        <div className="statement-band" aria-hidden="true">
          <div>
            <span>本気の子どもを、本気の大人が応援する。</span>
            <i>ONI ONI YOROSHIKU NOZOMIREN</i>
            <span>本気の子どもを、本気の大人が応援する。</span>
            <i>ONI ONI YOROSHIKU NOZOMIREN</i>
          </div>
        </div>

        <section className="about section-pad" id="about">
          <div className="page-shell about__grid">
            <SectionTitle en="OUR STORY">もう一度、<br />輝ける場所を。</SectionTitle>

            <div className="about__copy" data-reveal>
              <p className="about__quote">
                「鬼々よろしく魁望蓮を復活させて、
                <br />
                子どもたちが本気で輝ける場所を、
                <br />
                もう一度つくりたい」
              </p>
              <div className="about__body">
                <p>
                  2020年、コロナ禍でうらじゃが中止となり、私たちは活動を休止しました。それから7年。かつての踊り子たちは成長し、今度は想いを実現する仲間として帰ってきてくれました。
                </p>
                <p>
                  かつてチームを支えた大人たちも、それぞれの場所で7年分パワーアップしています。子どもだけのチームが少なくなった今だからこそ、私たちにできることがある。
                </p>
                <strong>みんなとなら、できる。</strong>
              </div>
            </div>
          </div>

          <div className="about__visual page-shell" data-reveal>
            <div className="about__photo">
              <Image
                src="/images/history-2016.jpg"
                alt="2016年、演舞を終えた鬼々よろしく魁望蓮の踊り子とスタッフ"
                fill
                sizes="(max-width: 800px) 94vw, 70vw"
              />
            </div>
            <div className="about__seal" aria-hidden="true">
              <span>再</span>
              <small>始動</small>
            </div>
            <p className="about__caption">THE SUMMER<br />RETURNS IN 2027</p>
          </div>
        </section>

        <section className="values section-pad">
          <div className="page-shell">
            <div className="values__intro">
              <SectionTitle en="WHAT WE NURTURE">踊りの先に、<br />育てたいもの。</SectionTitle>
              <p data-reveal>
                私たちが目指すのは、ただ踊るためだけのチームではありません。
                <br />
                一つのことに本気で取り組む時間が、子どもたちの未来の力になると信じています。
              </p>
            </div>

            <div className="values__list">
              {values.map((value) => (
                <article className="value-card" key={value.number} data-reveal>
                  <div className="value-card__top">
                    <span>{value.number}</span>
                    <i>{value.word}</i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                  <div className="value-card__arrow" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="project section-pad" id="project">
          <div className="project__shape" aria-hidden="true" />
          <div className="page-shell project__inner">
            <SectionTitle en="PROJECT 2027" light>100人の本気で、<br />心を震わせる。</SectionTitle>

            <div className="project__target" data-reveal>
              <div className="project__number">
                <strong>100</strong>
                <span>踊り子<br />目標</span>
              </div>
              <p>
                小学1年生から中学3年生まで。
                <br />
                100人の子どもたちが本気で踊り、
                <br />
                観ている人の心を震わせる。
              </p>
            </div>

            <div className="roadmap" data-reveal>
              <div>
                <span>NOW</span>
                <strong>復活プロジェクト始動</strong>
                <p>仲間と準備を進めています</p>
              </div>
              <div>
                <span>APR. 2027</span>
                <strong>踊り子募集開始予定</strong>
                <p>詳細はLINE・SNSで発表</p>
              </div>
              <div>
                <span>SUMMER 2027</span>
                <strong>うらじゃの舞台へ</strong>
                <p>岡山の夏を、もう一度熱く</p>
              </div>
            </div>

            <div className="project__join" data-reveal>
              <div>
                <p className="project__join-label">JOIN THE PROJECT</p>
                <h3>本気の子どもを応援する、<br />本気の大人になりませんか？</h3>
              </div>
              <div className="join-options">
                <article>
                  <span>01</span>
                  <div>
                    <h4>踊り子として</h4>
                    <p>小学1年生〜中学3年生が対象。募集詳細は順次お知らせします。</p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h4>支える仲間として</h4>
                    <p>子どもの本気を、運営や練習の場で支える方法を準備中です。</p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h4>応援の輪として</h4>
                    <p>まずは投稿のシェアや「楽しみ！」のひと言から力を貸してください。</p>
                  </div>
                </article>
              </div>
            </div>

            <a className="project__line" href={lineUrl} target="_blank" rel="noreferrer" data-reveal>
              <LineIcon />
              <span>
                <small>募集・応援方法の最新情報</small>
                公式LINEを友だち追加
              </span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </section>

        <section className="history section-pad" id="history">
          <div className="page-shell">
            <div className="history__head">
              <SectionTitle en="OUR HISTORY">積み重ねてきた、<br />誇りと感動。</SectionTitle>
              <p data-reveal>
                2011年、一念発起から始まった鬼々よろしく魁望蓮。
                <br />
                子どもと大人が同じ目標へ向かい、岡山の夏に何度も挑んできました。
              </p>
            </div>

            <div className="history__origin" data-reveal>
              <div className="history__origin-image">
                <Image
                  src="/images/history-2011.jpg"
                  alt="2011年、チーム創設期の鬼々よろしく魁望蓮"
                  fill
                  sizes="(max-width: 800px) 94vw, 82vw"
                />
              </div>
              <div className="history__origin-label">
                <strong>2011</strong>
                <span>一念発起<br />チーム創設</span>
              </div>
            </div>

            <div className="history__mosaic">
              <article data-reveal>
                <div className="history__mosaic-image">
                  <Image src="/images/history-2016.jpg" alt="2016年の鬼々よろしく魁望蓮" fill sizes="(max-width: 800px) 94vw, 48vw" />
                </div>
                <div>
                  <span>2016</span>
                  <h3>最優秀賞「誉」</h3>
                  <p>子どもたちと支える大人が一つになり、チームの歴史に残る夏へ。</p>
                </div>
              </article>
              <article data-reveal>
                <div className="history__mosaic-image">
                  <Image src="/images/history-2019.jpg" alt="2019年の鬼々よろしく魁望蓮" fill sizes="(max-width: 800px) 94vw, 48vw" />
                </div>
                <div>
                  <span>2019</span>
                  <h3>休止前、最後の夏</h3>
                  <p>受け継いだ想いは途切れず、7年後の再始動へつながっています。</p>
                </div>
              </article>
            </div>
          </div>

          <div className="awards">
            <div className="page-shell">
              <div className="awards__title" data-reveal>
                <p>URAJA AWARDS</p>
                <h3>うらじゃ受賞歴</h3>
              </div>
              <div className="awards__list">
                {awards.map((award) => (
                  <article key={award.year} data-reveal>
                    <strong>{award.year}</strong>
                    <div>
                      {award.items.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="movie section-pad">
          <div className="page-shell movie__grid">
            <a
              className="movie__visual"
              href="https://www.youtube.com/shorts/PBamuWfbhTM"
              target="_blank"
              rel="noreferrer"
              data-reveal
              aria-label="YouTubeで『2027年うらじゃ、復活！』を見る"
            >
              <Image src="/images/history-2019.jpg" alt="2019年の鬼々よろしく魁望蓮" fill sizes="(max-width: 800px) 94vw, 62vw" />
              <span className="movie__play"><PlayIcon /></span>
              <span className="movie__corner">PLAY MOVIE</span>
            </a>
            <div className="movie__copy" data-reveal>
              <p className="movie__label">RESTART MOVIE</p>
              <h2>7年の時を越えて、<br />あの夏が帰ってくる。</h2>
              <p>
                当時の踊り子、支えてくれた大人、そしてこれから出会う子どもたちへ。再始動に込めた想いを、動画でご覧ください。
              </p>
              <a href="https://www.youtube.com/shorts/PBamuWfbhTM" target="_blank" rel="noreferrer">
                YouTubeで見る
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="social section-pad" id="social">
          <div className="page-shell">
            <div className="social__head">
              <SectionTitle en="FOLLOW THE STORY">復活までの物語を、<br />一緒に。</SectionTitle>
              <p data-reveal>練習の様子、募集情報、子どもたちの挑戦を発信していきます。</p>
            </div>

            <div className="social__links">
              <a
                className="social-link"
                href="https://www.youtube.com/channel/UCX4HAcRvpVgmcvO1xkhwl5w"
                target="_blank"
                rel="noreferrer"
                data-reveal
              >
                <span className="social-link__index">01</span>
                <div className="social-link__icon">
                  <YoutubeIcon />
                </div>
                <span className="social-link__name">
                  <small>OFFICIAL CHANNEL</small>
                  <strong>YouTube</strong>
                </span>
                <span className="social-link__copy">動画で復活までを追う</span>
                <ArrowUpRightIcon />
              </a>

              <a
                className="social-link"
                href="https://www.instagram.com/onioni_yoroshiku_nozomiren/reels/"
                target="_blank"
                rel="noreferrer"
                data-reveal
              >
                <span className="social-link__index">02</span>
                <div className="social-link__icon">
                  <InstagramIcon />
                </div>
                <span className="social-link__name">
                  <small>@ONIONI_YOROSHIKU_NOZOMIREN</small>
                  <strong>Instagram</strong>
                </span>
                <span className="social-link__copy">写真とリールで見る</span>
                <ArrowUpRightIcon />
              </a>

              <a
                className="social-link"
                href="https://www.tiktok.com/@onioni_uraja"
                target="_blank"
                rel="noreferrer"
                data-reveal
              >
                <span className="social-link__index">03</span>
                <div className="social-link__icon">
                  <TiktokIcon />
                </div>
                <span className="social-link__name">
                  <small>@ONIONI_URAJA</small>
                  <strong>TikTok</strong>
                </span>
                <span className="social-link__copy">短い動画で楽しむ</span>
                <ArrowUpRightIcon />
              </a>

              <a
                className="social-link"
                href="https://www.facebook.com/groups/154422981410031"
                target="_blank"
                rel="noreferrer"
                data-reveal
              >
                <span className="social-link__index">04</span>
                <div className="social-link__icon">
                  <FacebookIcon />
                </div>
                <span className="social-link__name">
                  <small>TEAM COMMUNITY</small>
                  <strong>Facebook</strong>
                </span>
                <span className="social-link__copy">チームの輪につながる</span>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta__background" aria-hidden="true">
            <Image src="/images/history-2011.jpg" alt="" fill sizes="100vw" />
          </div>
          <div className="final-cta__overlay" />
          <div className="page-shell final-cta__content" data-reveal>
            <p>MAKE THE NEXT SUMMER TOGETHER.</p>
            <h2>子どもたちが輝く未来を、<br />一緒につくろう。</h2>
            <a href={lineUrl} target="_blank" rel="noreferrer">
              <LineIcon />
              <span>
                <small>最新情報・踊り子募集</small>
                公式LINEを友だち追加
              </span>
              <ArrowUpRightIcon />
            </a>
            <p className="final-cta__note">募集や応援の方法は、これから順次お知らせします。</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell site-footer__top">
          <div className="footer-brand">
            <Image src="/images/logo.jpg" alt="鬼々よろしく魁望蓮" width={80} height={80} />
            <div>
              <strong>鬼々よろしく魁望蓮</strong>
              <span>おにおによろしく のぞみれん</span>
              <small>OKAYAMA / URAJA KIDS DANCE TEAM</small>
            </div>
          </div>
          <nav aria-label="フッターナビゲーション">
            <a href="#about">私たちについて</a>
            <a href="#project">2027プロジェクト</a>
            <a href="#history">歩み・受賞歴</a>
            <a href="#social">公式SNS</a>
          </nav>
          <div className="footer-social" aria-label="公式SNSリンク">
            <a href="https://www.youtube.com/channel/UCX4HAcRvpVgmcvO1xkhwl5w" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
            <a href="https://www.instagram.com/onioni_yoroshiku_nozomiren/reels/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@onioni_uraja" target="_blank" rel="noreferrer" aria-label="TikTok">
              <TiktokIcon />
            </a>
            <a href="https://www.facebook.com/groups/154422981410031" target="_blank" rel="noreferrer" aria-label="Facebookグループ">
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className="page-shell site-footer__bottom">
          <span>© 2026 ONI ONI YOROSHIKU NOZOMIREN.</span>
          <a href="#top">PAGE TOP <ArrowRightIcon /></a>
        </div>
      </footer>
    </>
  );
}
