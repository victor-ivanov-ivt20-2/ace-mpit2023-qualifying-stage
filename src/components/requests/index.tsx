import Layout from "~/layouts/layout"
import RequestCard from "./requestCard"

const RequestPage = () => {
    return (
        <Layout>
            <div className="container pt-[33px]">
                <span className="font-medium text-base leading-[22px] text-[#64748B]">{">"} Главная</span>
                <h1 className="text-[32px] font-black text-[#1E293B] leading-[44px] pb-[51px]">Заявки</h1>

                <div className="gap-4 grid grid-cols-4 grid-flow-row">
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    <RequestCard
                        city="Якутск"
                        region="Городской"
                        description={"Это было очень интересно, но очень плохо, прощайте мисс"}
                        people={0}
                        start_at={new Date()}
                        finsih_at={new Date(2023, 4, 5)}
                        status={""}
                        userId={""}
                        tenantId={""}
                        id={1}
                    />
                    

                </div>


            </div>
        </Layout>
    )
}
export default RequestPage