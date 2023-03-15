import { type FC } from "react"
import type { SessionOnly } from "~/interfaces/props"
import BusnessManForm from "./busnessmanForm"

const ProfilePage: FC<SessionOnly> = ({session}) => {

    return (
        <div>
            Привет {session?.user.name}
            <BusnessManForm session={session} />
        </div>
    )
}

export default ProfilePage