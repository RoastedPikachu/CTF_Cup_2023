import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Script from "next/script";

import { ReduxProvider } from "@/store/provider";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata: Metadata = {
  title: "VII Кубок CTF России 2023",
  description:
    "Сайт VII Кубка CTF 2023. CTF — это соревнования по информационной безопасности в форме командной игры, главная цель которой — захватить флаг у соперника в приближённых к реальности условиях.",
  keywords:
    "CTF, СТФ, ctf, стф, Capture The Flag, capture the flag, Кубок CTF, Кубок СТФ, ctf соревнования, стф соревнования",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Script src="/static/scripts/metrica.js" />

        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
