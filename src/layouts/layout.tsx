import { FC, ReactNode } from "react";

import { useSession } from "next-auth/react";
import { api } from '../utils/api'
import Header from "~/components/main/Header";
import Transition from "./animation";
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    const { data: sessionData } = useSession()
    const { data: tenant } = api.tenant.getTenantByUserId.useQuery(sessionData?.user.id ? sessionData.user.id : "")
    return (
        <>
            <div className="bg-white rounded-[60px]">
                <Header session={sessionData} tenant={tenant}></Header>
                {children}
            </div>

        </>
    )
}

export default Layout