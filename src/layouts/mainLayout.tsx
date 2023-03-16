import { type FC } from "react"
import Head from "next/head"
import type { ChildrenOnly } from "~/interfaces/props"
import { Manrope } from 'next/font/google'
import Auth from "~/components/auth"
const manrope = Manrope({ subsets: ['cyrillic'] })
const MainLayout: FC<ChildrenOnly> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Вдаль.ru - забронируй дом вдали от дома</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main className={manrope.className}>
                    {children}

                <Auth />
            </main>
        </>
    )
}

export default MainLayout