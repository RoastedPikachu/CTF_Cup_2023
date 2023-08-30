import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CTF Cup 2023',
  description: 'Сайт кубка CTF 2023. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
