import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ジモグル推し部 | 地元の魅力をSNSで発信！",
  description: "グルメ好き×インフルエンサー志望×地元愛でつながるコミュニティ",
  keywords: "地元,グルメ,SNS,インフルエンサー,コミュニティ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSans.variable}>
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
