import { useSession } from "next-auth/react"
import type { GetServerSideProps, GetServerSidePropsContext } from "next/types"
import { getServerAuthSession } from "~/server/auth"
import ProfilePage from '~/components/profile' 
export default function Profile() {
    const { data: session } = useSession()
    return (
        <ProfilePage session={session} />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await getServerAuthSession(ctx)

    if (session)
        return {
            props: {
                session: session
            }
        }
    return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
}  