import { type FC } from "react"
import LogoComponent from "~/assets/svg/LogoComponent"
import Link from "next/link"
import { HeaderButton } from "../ui/buttons"
import { signIn, signOut } from "next-auth/react"
import type { Session } from "next-auth"
import type { Tenant } from "@prisma/client"
// import { PrimaryButton } from "../ui/buttons"
// import { signOut, signIn } from "next-auth/react"
// import Link from "next/link"
interface Header {
    session: Session | null,
    tenant?: Tenant | null 
}
const Header: FC<Header> = ({ session, tenant }) => {

    return (
        <header className="pt-[33px]">
            <div className="container flex justify-between">
                <Link href="/" className="flex gap-[6.45px]">
                    <LogoComponent />
                    <h1 className="font-black text-[25.8px] leading-[35px] uppercase">вдаль</h1>
                </Link>
                <nav className="flex gap-[48px] items-center">
                    <ul className="font-bold flex gap-8 text-base leading-[24px] text-blue">
                        <li><Link href="">Главная</Link></li>
                        {tenant ? <li><Link href="">Заявки</Link></li> : ""}
                        <li><Link href="">О нас</Link></li>
                    </ul>
                    {
                        session?.user.email ? <HeaderButton color="rgba(49, 125, 252, 0.12)" onClick={() => void signOut()}>{session?.user.email}</HeaderButton>
                        : <HeaderButton onClick={() => void signIn("google", { redirect: false })}>Войти</HeaderButton>
                        
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