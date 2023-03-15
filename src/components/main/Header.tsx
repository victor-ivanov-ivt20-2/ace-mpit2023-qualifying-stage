import { type FC } from "react"
import type { SessionOnly } from "~/interfaces/props"


const Header: FC<SessionOnly> = ({session}) => {

    return (
        <header>
            <div>
                {session?.user.email}
            </div>
        </header>
    )
}

export default Header 