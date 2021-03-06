import "../style/index.css";
import "../style/register.css";
import Head from "./Components/Head";
// import Head from 'next/head';
// import {Helmet} from "react-helmet";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "bootstrap-icons/font/bootstrap-icons.json";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../context/Theme";

import { StateProvider } from "../context/categoryState";

import { ServiceProvider } from "../context/Serviceproviders";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"></Script>

      <Head />
      <ServiceProvider>
        <StateProvider>
          <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </StateProvider>
      </ServiceProvider>
    </>
  );
}
