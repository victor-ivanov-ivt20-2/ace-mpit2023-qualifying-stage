import type { Session } from "next-auth"
import { type FC } from "react"
import Search from "./Search"
import Header from "./Header"
import RequestCard from "../requests/requestCard"
interface MainPage {
    session: Session | null
}
const MainPage: FC<MainPage> = ({ session }) => {

    return (
        <div className=" bg-white rounded-[60px]">
            <Header session={session} />
            <div className="container">
                <Search></Search>
            </div>
            <RequestCard 
            address={1} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida ullamcorper velit. Vestibulum ac ullamcorper quam, eu aliquam tortor."} 
            id={2} status="s" people={5} start_at={new Date()} finsih_at={new Date(2023, 5, 3)} userId="1" tenantId="2"
            
            />
            
            {/* <CreateTenant></CreateTenant> */}
        </div>
    )
}

export default MainPage