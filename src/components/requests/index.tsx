import { useSession } from "next-auth/react"
import { useEffect } from "react"
import Layout from "~/layouts/layout"
import { api } from "~/utils/api"
import RequestCard from "./requestCard"

const RequestPage = () => {
    const { data: session } = useSession()
    const { data: requests } = api.request.getAllMyReq.useQuery(session?.user.id ? session?.user.id : '')
    useEffect(() => {
        if (requests) {
            console.log(requests[0])
        }
    }, [requests])
    return (
        <Layout>
            <div className="container pt-[33px]">
                <span className="font-medium text-base leading-[22px] text-[#64748B]">{">"} Главная</span>
                <h1 className="text-[32px] font-black text-[#1E293B] leading-[44px] pb-[51px]">Заявки</h1>

                <div className="gap-4 grid grid-cols-4 grid-flow-row">
                    {
                        requests ? requests.map((req) => (
                            // eslint-disable-next-line react/jsx-key
                            <RequestCard
                                address={req.address}
                                description={"lalalalal"}
                                people={req.people}
                                start_at={new Date()}
                                finsih_at={new Date(2023, 4, 5)}
                                status={""}
                                userId={""}
                                tenantId={""}
                                id={req.id}
                            />
                        )) : ""
                    }


                    {/* <RequestCard
                        address="Город Якутск, Городской район"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    /> */}


                </div>


            </div>
        </Layout>
    )
}
export default RequestPage