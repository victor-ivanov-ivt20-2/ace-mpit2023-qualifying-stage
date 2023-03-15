import type { Session } from "next-auth"
import { type FC } from "react"
import Header from "./Header"
interface MainPage {
    session: Session | null
}
const MainPage: FC<MainPage> = ({session}) => {

    return (
        <>
            <Header session={session} />
        </>
    )
}

export default MainPage