import { type FC } from "react"
import Head from "next/head"
import type { ChildrenOnly } from "~/interfaces/props"

const MainLayout: FC<ChildrenOnly> = ({ children }) => {

    return (
        <>
            <Head>
                <title>Вдаль.ru - забронируй дом вдали от дома</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout