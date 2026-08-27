import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "運営理念｜鬼々よろしく魁望蓮",
  description:
    "鬼々よろしく魁望蓮の運営理念。「祭りで人を育てる」を掲げ、うらじゃを通してかっこいい子どもとかっこいい大人を育てます。",
  alternates: { canonical: "/philosophy/" },
};

export default function PhilosophyPage() {
  return (
    <main id="main-content" className="philosophy-page">
      <section className="philosophy-page__intro">
        <div className="page-shell">
          <p className="philosophy-page__en" data-reveal>PHILOSOPHY</p>
          <h1 data-reveal>祭りで、<br />人を育てる。</h1>
          <p className="philosophy-page__lead" data-reveal>
            鬼々よろしく魁望蓮は、うらじゃを通して「かっこいい子ども」と「かっこいい大人」を育てます。
            <br />
            「踊りは、人を育てる」を理念に掲げ、子どもと大人が共に「かっこいい人」を目指す連をつくります。
          </p>
        </div>
      </section>

      <section className="philosophy section-pad">
        <div className="page-shell">
          <div className="philosophy__mvv">
            <article className="philosophy-card" data-reveal>
              <p className="philosophy-card__en">MISSION</p>
              <h3>使命・存在意義</h3>
              <p className="philosophy-card__lead">
                うらじゃという舞台を使って、
                <br />
                かっこいい子どもと、かっこいい大人を育てる。
              </p>
              <p>
                私たちにとって踊りは目的ではなく、手段です。練習と祭り当日で身につけた礼儀・仲間への思いやり・やり切る力は、踊りをやめた後も、その子の中に残ります。そして、それを本気で支える大人自身もまた、鬼々よろしく魁望蓮で育っていきます。
              </p>
            </article>

            <article className="philosophy-card" data-reveal>
              <p className="philosophy-card__en">VISION</p>
              <h3>成すべきこと、あるべき姿</h3>
              <ol className="philosophy-card__list">
                <li>子どもが「礼儀」と「仲間」を体で覚える場をつくる</li>
                <li>大人が本気で子どもと向き合い、自らも成長する場をつくる</li>
                <li>郷土の祭り「うらじゃ」を、次の世代へ手渡す</li>
              </ol>
              <p>
                100人の子どもが美しい隊列で踊る舞台をつくります。本気で関わる大人がいる場所でしか、子どもは本気になれません。子どもに「かっこいい大人」を見せることが、鬼々よろしく魁望蓮の大人の役割です。
              </p>
            </article>
          </div>

          <div className="philosophy__values">
            <p className="philosophy__values-en" data-reveal>VALUE — 3つの「向き合い方」</p>
            <div className="philosophy__values-grid">
              <article className="philosophy-value" data-reveal>
                <span>01</span>
                <h4>「自分」と向き合う</h4>
                <ul>
                  <li>挨拶と返事は、気づいた人から先にしよう</li>
                  <li>できない自分を認め、そのうえで一歩だけ前に出よう</li>
                  <li>最後まで、決めたことをやり切ろう</li>
                  <li>うまくいかない理由を人のせいにせず、次の成長の手がかりと考えよう</li>
                </ul>
              </article>
              <article className="philosophy-value" data-reveal>
                <span>02</span>
                <h4>「仲間」と向き合う</h4>
                <ul>
                  <li>揃うまでが踊り。うまい人ほど、仲間と分かち合おう</li>
                  <li>注意するときは、次にどうするかまで一緒に考えよう</li>
                  <li>人の失敗と挑戦を笑わず、応援する人でいよう</li>
                </ul>
              </article>
              <article className="philosophy-value" data-reveal>
                <span>03</span>
                <h4>「祭り」と向き合う</h4>
                <ul>
                  <li>借りた場所・道具は、借りたときより綺麗にして返そう</li>
                  <li>地域の方、運営の方に感謝の気持ちを言葉にして伝えよう</li>
                  <li>温羅の物語を知り、自分の言葉で語れるようになろう</li>
                  <li>「今年だけ」で終わらせず、来年につながる関わり方をしよう</li>
                </ul>
              </article>
            </div>
          </div>

          <div className="philosophy__ideal" data-reveal>
            <div className="philosophy__ideal-head">
              <h3>「かっこいい踊り子」とは</h3>
              <p>
                この基準に、子どもと大人の区別はありません。同じ理想を目指します。
                <br />
                「かっこいい連」とは「かっこいい踊り子」で溢れる連のことです。
              </p>
            </div>
            <div className="philosophy__ideal-grid">
              <div>
                <h4>礼儀と向き合う</h4>
                <ul>
                  <li>挨拶の意義を理解し、時と場に応じた言動をとる人</li>
                  <li>返事は相手の目を見て、はっきりと伝える人</li>
                  <li>感謝と謝罪を、その時その場で言葉にできる人</li>
                  <li>場所・道具・衣装を大切に扱い、自分の後始末を自分でする人</li>
                </ul>
              </div>
              <div>
                <h4>仲間と向き合う</h4>
                <ul>
                  <li>心から信頼できる仲間をもち、互いに励まし合い、高め合える人</li>
                  <li>自分の考えを伝え、それぞれの個性や立場を尊重できる人</li>
                  <li>一人の遅れを、チーム全体の課題として引き受けられる人</li>
                  <li>悩みや葛藤も経験しながら、それでも関係を続けていける人</li>
                </ul>
              </div>
              <div>
                <h4>挑戦と向き合う</h4>
                <ul>
                  <li>高い目標を掲げ、困難や失敗を乗り越えて着実にやり遂げる人</li>
                  <li>人前に立つ怖さを知りながら、それでも一歩前に出る人</li>
                  <li>うまい下手ではなく、本気かどうかで自分を評価する人</li>
                  <li>自己を見つめ、個性を伸ばして自分の踊りを追求する人</li>
                </ul>
              </div>
              <div>
                <h4>郷土と向き合う</h4>
                <ul>
                  <li>郷土の伝統と文化を大切にし、地域の一員として郷土を愛する人</li>
                  <li>祭りを支えてきた先人や関係者に、尊敬の念を深める人</li>
                  <li>受け取ったものを、次の世代に渡そうとする人</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="philosophy__join">
            <article data-reveal>
              <h4>踊り子（子ども）に期待すること</h4>
              <ul>
                <li>最後までやり切る覚悟をもって、参加を決めた人</li>
                <li>うまくなりたいと思っている人、そして仲間もうまくしたいと思える人</li>
                <li>注意されたことを、次の練習で直そうとできる人</li>
                <li>「かっこいい踊り子」を目指したいと思ってくれる人</li>
              </ul>
            </article>
            <article data-reveal>
              <h4>支える大人に期待すること</h4>
              <p className="philosophy__join-note">子どもに求めることを、まず大人がやる。それがこの連の前提です。</p>
              <ul>
                <li>子どもに求めることを、まず自分が体現できる方</li>
                <li>他人の子を、自分の子として見られる方</li>
                <li>見ているだけでなく、手を動かせる方</li>
                <li>叱るときに、否定で終わらせず、次の行動まで示せる方</li>
                <li>子どもが「早く大人になりたい」と憧れるような姿でいようとする方</li>
                <li>自分自身も、この場で成長したいと思っている方</li>
              </ul>
            </article>
          </div>

          <div className="philosophy-page__back" data-reveal>
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
