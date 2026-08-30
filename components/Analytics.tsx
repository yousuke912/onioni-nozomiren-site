import Script from "next/script";

// 測定IDは環境変数から読む（未設定ならタグを出力しない＝ローカル開発では計測しない）
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
