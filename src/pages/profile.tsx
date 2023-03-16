
import type { GetServerSideProps, GetServerSidePropsContext } from "next/types"
import { getServerAuthSession } from "~/server/auth"
import ProfilePage from '~/components/profile'
import Layout from "~/layouts/layout"

export default function Profile() {
    return (
        <Layout>
            <ProfilePage />
        </Layout>
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