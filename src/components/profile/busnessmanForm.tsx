import { useState, type FC } from "react"
import { type SessionOnly } from "~/interfaces/props"
import { api } from "~/utils/api"
import { PrimaryButton } from "../ui/buttons"


const BusnessManForm: FC<SessionOnly> = ({ session }) => {
    const [inn, setInn] = useState<string>('')
    const createBusnessmans = api.user.createBusinessman.useMutation()
    const createAddress = api.address.setAddress.useMutation()

    const createBusnessman = () => {
        if (typeof session?.user.email === 'string') {
            createAddress.mutate({
                country: "Российская Федерация",
                region: "Республика Саха (Якутия)",
                city: "Якутск",
                district: "Город",
                street: "Ленина 1"
            })
            createBusnessmans.mutate({
                email: session?.user.email,
                inn: inn,
                name: "ООО СИВИГ",
                address: 1
            })
        }
    }

    return (
        <div>
            <input type="text" value={inn} onChange={(e) => setInn(e.target.value)} />
            <PrimaryButton onClick={createBusnessman}>Подтвердить</PrimaryButton>
        </div>

    )
}

export default BusnessManForm