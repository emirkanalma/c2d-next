import Layout from "../components/layout";
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <p>Merhaba</p>
    </Layout>
  );
}

export default HomePage;