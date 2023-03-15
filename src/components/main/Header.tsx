import { type FC } from "react"
import type { SessionOnly } from "~/interfaces/props"
import { PrimaryButton } from "../ui/buttons"
import { signOut, signIn } from "next-auth/react"
import Link from "next/link"
const Header: FC<SessionOnly> = ({ session }) => {

    return (
        <header>
            <div className="container flex justify-between">
                {session?.user.email ? session.user.email :
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
                    : ""}
            </div>
        </header>
    )
}

export default Header 