import { type NextPage } from "next";
import MainPage from "~/components/main";
import Layout from "~/layouts/layout";

const Home: NextPage = () => {

  return (
    <Layout>
      <MainPage />
    </Layout>
  )
};

export default Home;
