import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "../components/Nav";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Concert+One&family=Prompt&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* NAV */}
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
