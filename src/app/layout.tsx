import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/store/provider';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VII Кубок CTF России 2023',
  description: 'Сайт VII кубка CTF 2023.',
}

export default function RootLayout({
   children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ru">
        <body className={inter.className}>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </body>
      </html>
  )
}
