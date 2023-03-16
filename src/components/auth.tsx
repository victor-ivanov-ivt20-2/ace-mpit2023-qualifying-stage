import { signIn } from "next-auth/react";
import { type ChangeEvent, type FC, useState } from "react";
import GoogleLogo from "~/assets/svg/GoogleLogo";
import { useAppDispatch, useAppSelector } from "~/hook";
import { setActive } from "~/store/modal.slice";
import styles from "./Auth.module.scss"

const Auth: FC = () => {
    const dispatch = useAppDispatch()
    const modal = useAppSelector(state => state.modal.active)

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const Login = () => {
        console.log("Вы залогинились")
    }
    const Register = () => {
        console.log("Вы зарегистрировались?")
    }
    return (
        <div style={modal ? { display: 'flex' } : { display: 'none' }} className="modal" onClick={() => void dispatch(setActive(false))}>
            <div className={styles.auth} onClick={e => e.stopPropagation()}>
                <h1>Войти</h1>
                <form>
                    <div>
                        <label>Почта</label>
                        <input type="email" onChange={(e: ChangeEvent<HTMLInputElement>) => void setEmail(e.target.value)} value={email} placeholder="Введите почту" />
                    </div>
                    <div>
                        <label>Пароль</label>
                        <input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => void setPassword(e.target.value)} value={password} placeholder="Введите пароль" />
                    </div>
                    <div>
                        <button  onClick={() => Login}>Войти</button>
                        <button className={styles.reg} onClick={() => Register}>Зарегистрироваться</button>

                    </div>
                </form>
                <div className={styles.lines}>
                    <div></div>
                    <span>или</span>
                    <div></div>
                </div>

                <button className={styles.google} onClick={() => void signIn('google', {
                    redirect: false,
                    callbackUrl: '/'
                })}> <GoogleLogo></GoogleLogo> <span className="ml-[10px]">Войти через Google</span></button>
            </div>
        </div>
    )
}
export default Auth