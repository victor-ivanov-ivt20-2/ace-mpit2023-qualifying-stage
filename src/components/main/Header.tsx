import { type FC } from "react"
import type { SessionOnly } from "~/interfaces/props"
import { PrimaryButton } from "../ui/buttons"
import { signOut, signIn } from "next-auth/react"

const Header: FC<SessionOnly> = ({ session }) => {

    return (
        <header>
            <div className="container">
                {session?.user.email ? session.user.email :
                    <div>
                        <PrimaryButton onClick={() => {
                            void signIn("google", {
                                redirect: false,
                            })
                        }}>Войти</PrimaryButton>
                        <PrimaryButton onClick={() => {
                            void signIn()
                        }}>Войти</PrimaryButton>
                    </div>}
                {session?.user.email ? <PrimaryButton onClick={() => { void signOut() }}>Выйти</PrimaryButton> : ""}
            </div>
        </header>
    )
}

export default Header 