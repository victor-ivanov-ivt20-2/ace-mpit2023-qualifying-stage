import type { Session } from "next-auth"
import { type FC } from "react"
import Search from "./Search"
import Header from "./Header"
import RequestCard from "../requests/requestCard"
import type { Tenant } from "@prisma/client"
const MainPage: FC = () => {

    return (
        <div className=" bg-white rounded-[60px]">
            {/* <Header tenant={tenant} session={session} /> */}
            <div className="container">
                <Search></Search>
            </div>
            {/* <CreateTenant></CreateTenant> */}
        </div>
    )
}

export default MainPage