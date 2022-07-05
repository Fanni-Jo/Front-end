import '../style/index.css';
import '../style/register.css';
import script from 'next/script';
import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import "bootstrap-icons/font/bootstrap-icons.json"
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./context/Theme";

import { StateProvider } from "./context/categoryState";

import { ServiceProvider } from "./context/Serviceproviders";


export default function MyApp({ Component, pageProps }) {
  // useEffect(()=>{
  //   import("bootstrap/dist/js/bootstrap");
  // },[])



  return (
  <>
  <Head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"/>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" ></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"></script>

    <title>Fanni</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
  </Head>
    <Helmet>
    <script src=
      "../js/script.js" 
    type="text/javascript" />
       
    </Helmet>
<ServiceProvider>
    <StateProvider>
  <ThemeProvider>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </ThemeProvider>
  </StateProvider>
  </ServiceProvider>



  </>
  )
}
