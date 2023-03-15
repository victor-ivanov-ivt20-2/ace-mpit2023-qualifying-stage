import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import MainPage from "~/components/main";
import { api } from "~/utils/api";
const Home: NextPage = () => {
  const { data: sessionData } = useSession()
  const { data: tenant } = api.tenant.getTenantByUserId.useQuery(sessionData?.user.id ? sessionData.user.id : "")
  return (
    <MainPage tenant={tenant} session={sessionData} />
  )
};

export default Home;
