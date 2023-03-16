import { type FC } from "react"
import LogoComponent from "~/assets/svg/LogoComponent"
import Link from "next/link"
import { HeaderButton } from "../ui/buttons"
import { signIn, signOut } from "next-auth/react"
import type { Session } from "next-auth"
import type { Tenant } from "@prisma/client"
import { useAppDispatch } from "~/hook"
import { setActive } from "~/store/modal.slice"
import { useRouter } from "next/router"
interface Header {
    session: Session | null,
    tenant?: Tenant | null 
}
const Header: FC<Header> = ({ session, tenant }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    return (
        <header className="pt-[33px]">
            <div className="container flex justify-between">
                <Link href="/" className="flex gap-[6.45px]">
                    <LogoComponent />
                    <h1 className="font-black text-[25.8px] leading-[35px] uppercase">вдаль</h1>
                </Link>
                <nav className="flex gap-[48px] items-center">
                    <ul className="font-bold flex gap-8 text-base leading-[24px] text-blue">
                        <li><Link href="/">Главная</Link></li>
                        {session?.user ? <li><Link href={tenant ? "/inbox" : "/myreq"}>Заявки</Link></li> : ""}
                        <li><Link href="/about">О нас</Link></li>
                    </ul>
                    {
                        session?.user.email ? <HeaderButton color="rgba(49, 125, 252, 0.12)" onClick={() => void router.push("/profile")}>Профиль</HeaderButton>
                        : <HeaderButton onClick={() => void dispatch(setActive(true))}>Войти</HeaderButton>
                        
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header


{/* {session?.user.email ? session.user.email :
                    <div>
                        <PrimaryButton onClick={() => {
                            void signIn("google", {
                                redirect: false,
                            })
                        }}>Войти</PrimaryButton>
                    </div>}
                {session?.user.email ?
                    <>
                        <Link href="/profile">{session?.user.name}</Link>
                        <PrimaryButton onClick={() => { void signOut() }}>Выйти</PrimaryButton>
                    </>
                    : ""} */}