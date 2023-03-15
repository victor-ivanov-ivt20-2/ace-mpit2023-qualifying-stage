import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import MainPage from "~/components/main";
const Home: NextPage = () => {
  const { data: sessionData } = useSession()
  return (
    <MainPage session={sessionData} />
  );
};

export default Home;
