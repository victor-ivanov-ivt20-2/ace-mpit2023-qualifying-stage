import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import MainPage from "~/components/main";
import { getServerAuthSession } from "~/server/auth";
const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { session } = props
  useEffect(() => {
    console.log(session)
    console.log("he")
  }, [])
  return (
    <MainPage session={session} />
  );
};

export default Home;

/* eslint-disable */
// export const getStaticPaths: GetStaticPaths = async () => {
  
//   let paths: Paths[]  = []
  
//   const tenantsProperty = await prisma.tenant.findMany()
//   if (tenantsProperty) { 
//     paths = tenantsProperty.map((property) => ({
//       params: {
//         id: `${property.id}`
//       }
//     }))
//   }
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }
export async function getServerSideProps(ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) {
  
  
  return {
    props: {
      session: await getServerAuthSession(ctx)
    }
  }
}
