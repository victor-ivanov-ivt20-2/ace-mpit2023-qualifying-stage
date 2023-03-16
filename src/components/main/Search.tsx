import { useSession } from "next-auth/react"
import SearchStar from "~/assets/svg/SearchStarComponent"
import { useAppDispatch } from "~/hook"
import { setActive } from "~/store/modal.slice"
import { PrimaryButton } from "../ui/buttons"
import { DateInput, Dropdown } from "../ui/inputs"
import { api } from '~/utils/api'
import { useEffect, useState } from "react"
const Search = () => {
    const dispatch = useAppDispatch()
    const { data: session } = useSession()
    const { data: tenant } = api.tenant.getTenantByUserId.useQuery(session?.user.id ? session?.user.id : "")
    const { data: addresses } = api.tenant.getAllTenantsProperty.useQuery()
    const createReq = api.request.createRequest.useMutation()
    const [address, setAddress] = useState<string | null>()
    const [start_at, setStart_at] = useState<string | null>()
    const [finish_at, setFinish_at] = useState<string | null>()
    const [people, setPeople] = useState<string | null>()
    const getterAddress = (gett: string | null) => {
        setAddress(gett)
    }
    const getterPeople = (gett: string | null) => {
        setPeople(gett)
    }
    const getterStart = (gett: string | null) => {
        setStart_at(gett)
    }
    const getterFinish = (gett: string | null) => {
        setFinish_at(gett)
    }

    const createRequest = () => {
        
        createReq.mutate({
            userId: session?.user.id,
            address: address,
            start_at: start_at,
            finish_at: finish_at,
            people: people
        })
    }

    return (
        <div className="mt-[150px] flex flex-col justify-center items-center gap-[48px] pb-[216px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="relative font-black text-[64px] leading-[87px] text-dark flex items-center gap-2">
                    Путешествовать с нами
                    <span className="flex mt-[6px] text-white z-20 justify-center items-end bg-green w-[237px] h-[76px] rounded-[50px]">легче</span>
                    <div className="absolute -right-[30px] z-10 -top-[24px]">
                        <SearchStar />
                    </div>
                </h1>
                <span className="text-dark text-[32px] leading-[44px] font-bold">Оставить заявку можно прямо сейчас</span>
            </div>
            <div className="flex flex-col gap-2.5 mt-[34px]">
                <div className="flex gap-[3px] items-start">
                    <Dropdown  classs="rounded-l-xl" data={["Тиски", "Чокурдах"]} placeholder="Куда" getter={getterAddress}></Dropdown>
                    <DateInput getter={getterStart} placeholder="Когда"></DateInput>
                    <DateInput getter={getterFinish} placeholder="Обратно"></DateInput>
                    <Dropdown classs="rounded-r-xl" data={["1 человек", "2 - 3 человек", "4 - 5 человек", " 6 - 10 человек"]} getter={getterPeople} placeholder="Гости"></Dropdown>
                    <button onClick={session?.user ? () => createRequest() : void dispatch(setActive(true))}>Оставить заявку</button>
                    {/* <PrimaryButton onClick={session?.user ? void console.log(address, start_at, finish_at, people) : () => void dispatch(setActive(true))}>Оставить заявку</PrimaryButton> */}
                </div>
            </div>
        </div>
    )
}

export default Search