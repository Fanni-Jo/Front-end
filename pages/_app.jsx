import '../style/index.css';
import '../style/register.css';
import script from 'next/script';
import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

export default function MyApp({ Component, pageProps }) {
  // useEffect(()=>{
  //   import("bootstrap/dist/js/bootstrap");
  // },[])



  return (
  <>
  <Head>
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
    <Navbar/>

  


  <Component {...pageProps} />
  <Footer/>



  </>
  )
}
