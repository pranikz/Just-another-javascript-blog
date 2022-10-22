import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Head>
          <title>Javascript Blog by Pratyush</title>
          <link
            href="https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css"
            rel="stylesheet"
          ></link>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
