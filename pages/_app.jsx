import '../style/index.css';
import '../style/register.css';

// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

export default function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])



  return (
  <>
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
