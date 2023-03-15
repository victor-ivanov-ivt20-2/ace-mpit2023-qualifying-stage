import type { Session } from "next-auth"
import { type FC } from "react"
import CreateTenant from "../createTenant"
import Footer from "./Footer"
import Header from "./Header"
interface MainPage {
    session: Session | null
}
const MainPage: FC<MainPage> = ({session}) => {

    return (
        <>
            <Header session={session} />
            <CreateTenant></CreateTenant>
            <Footer />
        </>
    )
}

export default MainPage