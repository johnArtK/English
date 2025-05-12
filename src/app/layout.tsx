import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import YandexMetrika from "./components/yandexMetrica";
// import { Suspense } from "react";
import Script from "next/script";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Изучите 3000 английских слов",
  description:
    "Освойте английский язык с нашей коллекцией из 3000 слов, включая значения и примеры предложений.",
  keywords: [
    "английский словарь",
    "изучение английского",
    "английские слова",
    "приложение для слов",
    "B1",
    "B2",
    "C1",
    "C2",
    "A1",
    "A2",
    "английский B1",
    "английский B2",
    "английский C1",
    "английский C2",
    "английский A1",
    "английский A2",
  ],
  openGraph: {
    title: "Изучите 3000 английских слов",
    description:
      "Изучите 3000 английских слов с их значениями и примерами для улучшения ваших навыков.",
    url: "https://english-umber-psi.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Изучите 3000 английских слов",
    description: "Освойте английский с 3000 слов, их значениями и примерами.",
    // images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Метрика в head через Script с strategy="afterInteractive" */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(101787554, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
            `,
          }}
        />
        <script type="text/javascript"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/101787554"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
