import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/store/provider';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VII Кубок CTF России 2023',
  description: 'Сайт VII кубка CTF 2023. CTF — это соревнования по информационной безопасности в форме командной игры, главная цель которой — захватить флаг у соперника в приближённых к реальности условиях.',
  keywords: 'CTF, СТФ, ctf, стф, Capture The Flag, capture the flag, Кубок CTF, Кубок СТФ, ctf соревнования, стф соревнования'
}


export default function RootLayout({
   children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ru">
        <body className={inter.className}>
            <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(94888158, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            </script>
            <noscript><div><img src="https://mc.yandex.ru/watch/94888158" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

            <ReduxProvider>
                {children}
            </ReduxProvider>
        </body>
      </html>
  )
}
