import { useState, type FC } from "react"
import styles from './p.module.scss'
const ProfilePage: FC = () => {
    const [firstname, setFirstname] = useState<string>('Виктор')
    const [secondname, setSecondname] = useState<string>('Алдарович')
    const [lastname, setLastname] = useState<string>('Иванов')
    const [phone, setPhone] = useState<string>('+7 (924) 177-04-14')
    const [passport, setPassport] = useState<string>('9802 672121')
    const [inn, setInn] = useState<string>('159301293093')

    return (
        <div className="container pt-[33px]">
            <span className="font-medium text-base leading-[22px] text-[#64748B]">{">"} Главная</span>
            <h1 className="text-[32px] font-black text-[#1E293B] leading-[44px] pb-[51px]">Личные данные</h1>

            <div className={styles.inputs}>
                <div>
                    <div>
                        <label>Имя</label>
                        <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />
                    </div>
                    <div>
                        <label>Фамилия</label>
                        <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                    </div>
                    <div>
                        <label>Отчество</label>
                        <input type="text" value={secondname} onChange={e => setSecondname(e.target.value)} />
                    </div>
                    <div>
                        <label>Дата рождения</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="pb-[170px]">
                    <div>
                        <label>Номер телефона</label>
                        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label>Номер, серия паспорта</label>
                        <input type="text" value={passport} onChange={e => setPassport(e.target.value)} />
                    </div>
                    <div>
                        <label>ИНН</label>
                        <input type="text" value={inn} onChange={e => setInn(e.target.value)} />
                    </div>
                    <div>
                        <label>Вредные привычки</label>
                        <input type="text" value={"Нет"} />
                    </div>
                </div>
                <button className="pb-[100px]">Сохранить</button>
            </div>
        </div>
    )
}

export default ProfilePage