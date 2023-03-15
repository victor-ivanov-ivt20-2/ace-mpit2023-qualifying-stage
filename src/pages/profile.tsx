
import { useSession } from "next-auth/react"
import type { GetServerSideProps, GetServerSidePropsContext } from "next/types"
import { type FC } from "react"
import { getServerAuthSession } from "~/server/auth"
// import { getServerAuthSession } from "~/server/auth"

const Profile: FC = () => {
    const { data: session } = useSession()
    return (
        <div>
            {session?.user.name}
        </div>
    )
}

export default Profile

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await getServerAuthSession(ctx)

    if (session)
        return {
            props: {
                session
            }
        }
    return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
}  