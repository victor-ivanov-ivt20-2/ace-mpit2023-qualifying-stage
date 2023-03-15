import { useState, type FC } from "react"
import { api } from "~/utils/api"
import { PrimaryInput } from "./ui/inputs"

const CreateTenant: FC = () => {
    const createTenant = api.user.createTenant.useMutation()
    const [email, setEmail] = useState<string>()
    const [lastname, setLastname] = useState<string>()
    const [firstname, setFirstname] = useState<string>()
    const [secondname, setSecondname] = useState<string>()
    const [phone, setPhone] = useState<number>()
    const register = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log(email)
        if (email && lastname && firstname && secondname && phone) {
            console.log(email)
            createTenant.mutate({
                email: email,
                lastname: lastname,
                firstname: firstname,
                secondname: secondname,
                phone: phone
            })
        }

    }
    return (
        <>
            <form className="flex flex-col" onSubmit={register}>
                <label>Почта</label>
                <PrimaryInput onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Почта агента" />
                <label>Фамилия</label>
                <PrimaryInput onChange={(e) => setLastname(e.target.value)} value={lastname} placeholder="Фамилия" />
                <label>Имя</label>
                <PrimaryInput onChange={(e) => setFirstname(e.target.value)} value={firstname} placeholder="Имя" />
                <label>Отчество</label>
                <PrimaryInput onChange={(e) => setSecondname(e.target.value)} value={secondname} placeholder="Отчество" />
                <label>Телефон</label>
                <PrimaryInput onChange={(e) => setPhone(Number(e.target.value))} value={phone} placeholder="Телефон" type="number" />
                <input type="submit" />
            </form>
        </>
    )
}

export default CreateTenant