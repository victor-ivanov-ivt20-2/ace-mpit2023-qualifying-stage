import { useState, type FC } from "react"
import { api } from "~/utils/api"
import { PrimaryInput } from "./ui/inputs"
import {useRouter} from "next/router"

const CreateTenant: FC = () => {
    const router = useRouter()
    const createTenant = api.user.createTenant.useMutation()
    const [lastname, setLastname] = useState<string>()
    const [firstname, setFirstname] = useState<string>()
    const [secondname, setSecondname] = useState<string>()
    const [phone, setPhone] = useState<number>()
    const [city, setCity] = useState<string>()
    const [region, setRegion] = useState<string>()
    const register = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (lastname && firstname && secondname && phone && city && region) {
            createTenant.mutate({
                lastname: lastname,
                firstname: firstname,
                secondname: secondname,
                phone: phone,
                city: city,
                region: region
            })
            // eslint-disable-next-line react-hooks/rules-of-hooks
            void router.replace('/')
        }

    }
    return (
        <>
            <form className="flex flex-col gap-2 mt-20" onSubmit={register}>
                <label>Фамилия</label>
                <PrimaryInput onChange={(e) => setLastname(e.target.value)} value={lastname} placeholder="Фамилия" />
                <label>Имя</label>
                <PrimaryInput onChange={(e) => setFirstname(e.target.value)} value={firstname} placeholder="Имя" />
                <label>Отчество</label>
                <PrimaryInput onChange={(e) => setSecondname(e.target.value)} value={secondname} placeholder="Отчество" />
                <label>Телефон</label>
                <PrimaryInput onChange={(e) => setPhone(Number(e.target.value))} value={phone} placeholder="Телефон" type="number" />
                <label>Населённый пункт</label>
                <PrimaryInput onChange={(e) => setCity(e.target.value)} value={city} placeholder="Населённый пункт" type="text" />
                <label>Регион</label>
                <PrimaryInput onChange={(e) => setRegion(e.target.value)} value={region} placeholder="Регион" type="text" />
                <input className="w-full bg-slate-200 rounded-xl mb-5 mt-3 h-10" type="submit" />
            </form>
        </>
    )
}

export default CreateTenant