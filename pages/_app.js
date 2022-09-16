import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout  >
      <Head>
        <title>Javascript Blog by Pratyush</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
